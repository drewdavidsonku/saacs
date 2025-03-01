import { GetService } from './builder-remote.js'
import { Any, Message, createRegistry } from '@bufbuild/protobuf'
import { GenericServiceClient } from '../gen/chaincode/common/generic_pb_gateway.js'
import {
  BootstrapRequest,
  CreateCollectionRequest,
  CreateRequest,
  GetRequest,
  ListByAttrsRequest,
  ListByCollectionRequest,
  ListRequest,
} from '../gen/chaincode/common/generic_pb.js'
import {
  Collection,
  ItemKey,
  Role,
  UserCollectionRoles,
} from '../gen/auth/v1/objects_pb.js'
import { Action, AuthType } from '../gen/auth/v1/auth_pb.js'
import { Specimen } from '../gen/biochain/v1/index.js'
import { construct, omit, random } from 'radash'
import { auth, ccbio } from '../index.js'

import * as fs from 'fs'

const full_path =
  'Z:/source/repos/Thesis/pkg/biochain/import/ku_orn_database_great_plains_pre_1970_NoDups.json'

import orn from '../../../biochain/import/ku_orn_database_great_plains_pre_1970_NoDups.json' assert { type: 'json' }

// read object from file at ../sample/biochain/orn.json
import z from 'zod'
import { Timestamp, FieldMask } from '@bufbuild/protobuf'

import { objectify } from 'radash'
import { fstat } from 'fs'

export type ProtoDate = z.infer<typeof ProtoDate>
export const ProtoDate = z.object({
  verbatim: z.string().trim().optional(),
  timestamp: z.coerce
    .date()
    .transform((d) => Timestamp.fromDate(d))
    .optional(),
  year: z.number().optional(),
  month: z.string().trim().optional(),
  day: z.number().optional(),
})

export type LastModified = z.infer<typeof LastModified>
export const LastModified = z.object({
  txId: z.string().trim().optional(),
  mspId: z.string().trim().optional(),
  userId: z.string().trim().optional(),
  timestamp: z.coerce.date().transform((d) => Timestamp.fromDate(d)),
  note: z.string().trim().optional(),
})
export const zSpecimen = z.object({
  collectionId: z.string().trim(),
  specimenId: z.string().uuid(),
  primary: z.object({
    catalogNumber: z.string().trim().optional(),
    accessionNumber: z.string().trim().optional(),
    fieldNumber: z.string().trim().optional(),
    tissueNumber: z.string().trim().optional(),
    cataloger: z.string().trim().optional(),
    collector: z.string().trim().optional(),
    determiner: z.string().trim().optional(),
    fieldDate: ProtoDate.optional(),
    catalogDate: ProtoDate.optional(),
    determinedDate: ProtoDate.optional(),
    determinedReason: z.string().trim().optional(),
    originalDate: ProtoDate.optional(),
    lastModified: LastModified.optional(),
  }),
  secondary: z.object({
    sex: z.nativeEnum(ccbio.Specimen_Secondary_SEX),
    age: z.nativeEnum(ccbio.Specimen_Secondary_AGE),
    weight: z.number().optional(),
    weightUnits: z.string().trim().optional(),
    condition: z.string().trim().optional(),
    molt: z.string().trim().optional(),
    notes: z.string().trim().optional(),
    preparations: z
      .record(
        z.object({
          verbatim: z.string().trim().optional(),
        }),
      )
      .default({}),
    lastModified: LastModified.optional(),
  }),
  taxon: z
    .object({
      kingdom: z.string().trim().default(''),
      phylum: z.string().trim().default(''),
      class: z.string().trim().default(''),
      order: z.string().trim().default(''),
      family: z.string().trim().default(''),
      genus: z.string().trim().default(''),
      species: z.string().trim().default(''),
      subspecies: z.string().trim().default(''),
      lastModified: LastModified.optional(),
    })
    .default({}),
  georeference: z.object({
    country: z.string().trim().optional(),
    stateProvince: z.string().trim().optional(),
    county: z.string().trim().optional(),
    locality: z.string().trim().optional(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    habitat: z.string().trim().optional(),
    continent: z.string().trim().optional(),
    locationRemarks: z.string().trim().optional(),
    coordinateUncertaintyInMeters: z.number().optional(),
    georeferenceBy: z.string().trim().optional(),
    georeferenceDate: ProtoDate.optional(),
    georeferenceProtocol: z.string().trim().optional(),
    geodeticDatum: z.string().trim().optional(),
    footprintWkt: z.string().trim().optional(),
    notes: z.string().trim().optional(),
    lastModified: LastModified.optional(),
  }),
  images: z
    .record(
      z.object({
        id: z.string().trim().optional(),
        url: z.string().trim().optional(),
        notes: z.string().trim().optional(),
        hash: z.string().trim().optional(),
        lastModified: LastModified.optional(),
      }),
    )
    .default({}),
  loans: z
    .record(
      z.object({
        id: z.string().trim().optional(),
        description: z.string().trim().optional(),
        loanedBy: z.string().trim().optional(),
        loanedTo: z.string().trim().optional(),
        loanedDate: ProtoDate.optional(),
        lastModified: LastModified.optional(),
      }),
    )
    .default({}),
  grants: z
    .record(
      z.object({
        id: z.string().trim().optional(),
        description: z.string().trim().optional(),
        grantedBy: z.string().trim().optional(),
        grantedTo: z.string().trim().optional(),
        grantedDate: ProtoDate.optional(),
        lastModified: LastModified.optional(),
      }),
    )
    .default({}),
  lastModified: LastModified.optional(),
})

const collectionId = 'ku_orn'
const utf8Decoder = new TextDecoder()
const delay = (m: any) => new Promise((resolve) => setTimeout(resolve, m))

// import orn from "../../../biochain/import/ku_orn_cov.json" assert { type: "json" };

// import { GlobalRegistry } from "";

async function ImportSpecimens() {
  const { service, connection, contract } = await GetService({
    username: 'me',
    // userIdex: 0,
    channel: 'demo',
    // channel: "mychannel",
    contractName: 'a',
  })

  const output: string[] = []
  const failed: string[] = []

  orn['items'].forEach((item: any) => {
    const s = new ccbio.Specimen(zSpecimen.parse(construct(item)))
    const v = Any.pack(s)
    const req = new CreateRequest({
      item: {
        value: v,
      },
    })
    output.push(
      req.toJsonString({ typeRegistry: createRegistry(ccbio.Specimen) }),
    )
  })
  // console.log(output.join("\n"));

  await output.forEach(async (o: string) => {
    contract
      .submitTransaction('Create', o)
      .then((r) => {})
      .catch((e) => {
        console.error({ error: e, specimen: o })
        failed.push(o)
      })
  })

  console.log({ failed })
  return { output, failed }
}

async function main() {
  const { failed } = await ImportSpecimens()

  fs.writeFileSync('failed.json', JSON.stringify(failed))
}

main()
