import { fakerEN_US } from '@faker-js/faker';

// import { samplepb } from '../gen/chaincode/sample/v0/items_pb';

import { Timestamp } from '@bufbuild/protobuf';
import { Book, Degree } from '../gen/chaincode/sample/v0/items_pb';

// function MakeDegrees(seed: number[], collectionId: string): Record<string, Degree>{
//     const faker = fakerEN_US;
//     faker.seed(seed);
    
//     const degrees: Record<string,samplepb.Degree> = {};
//     for (let i = 0; i < faker.number.int({max: 10}); i++) {
//         const degree = new samplepb.Degree({
//             degreeDate: Timestamp.fromDate(faker.date.past()),
//             degreeName: faker.person.jobTitle(),
//             institute: faker.company.name(),
//         });
//         degrees[degree.degreeName] = degree;
//     }
    
//     return degrees;
// }

// function MakeBooks(seed: number[], collectionId: string): Book[] {

//     const faker = fakerEN_US;
//     faker.seed(seed);

//     const books: samplepb.Book[] = [];
//     for (let i = 0; i < faker.number.int({max: 10}); i++) {
//         const book = new samplepb.Book({
            
//         });
//         books.push(book);
//     }

//     return books;

// }


// function MakeAuthor(seed: number[], collectionId: string): samplepb.Author{
//     const faker = fakerEN_US;
//     faker.seed(seed);
    
//     const author = new samplepb.Author({
//         authorId: faker.string.uuid(),
//         authorName: faker.person.fullName(),
//         collectionId: collectionId,
//         books: MakeBooks(seed, collectionId),
//         degrees: MakeDegrees(seed, collectionId),
//     });
    
    
//     return author;
    
// }

