# GOAL
Create an e-commerce for pottery with Next.js, Prisma, and Vercel. 
(Remaking Kiln Me Softly Project)

## Links:
1) How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres [https://vercel.com/guides/nextjs-prisma-postgres]

## Progress:
### 4/16 (Paired with Oliver to help set up)
- Got through Link 1 (up to Step 5). 
    - Created new Repo
    - Deployed repo on Vercel and set up Vercel Postgres database. 
        - Use 'vercel env pull .env' to pull down the latest environment variables to get your local project working with the Postgres database.
    - Downloaded Prisma (Relational Database) and Prisma Client (ORM)
        - Created and pushed 2 models: Users and Pottery with `npx prisma db push`
        - Able to see database with `npx prisma studio` command.

### 4/17
##### Notes
- What does `npx prisma db push` and `npx prisma generate` do? 
    - `npx prisma db push` syncs with your Prisma schema (schema.prisma file) with your database schema (in this case, Vercel Postgres DB). 
    - `npx prisma generate` needs to be used for every time your Prisma schema file is changing, which only effects Prisma Client.

    * Tested out `npx prisma db push` and `npx prisma generate`to figure out how to use them. 
        First Test:
        - Originally had User and Pottery models, but for the test, I created a Review model.
        - As the first test, I used `npx prisma generate`, assuming that it will add the extra model to my database schema. It gave me an error once I ran `npx prisma studio`. 
        - Error: 'The table `public.Review` does not exist in the current database.'
        - Then, I tried adding a column in Pottery called "reviews". I tried `npx prisma generate` again, assuming it would create an extra column. It did, but still gave me an error.
        - Error: 'The column `Pottery.review` does not exist in the current database.' 
        - Then I used `npx prisma db push`. No error appears and the Review model is added. Vercel's Postgres Database also changed. 
        
        Second Test:
        - Originally, I have User, Pottery, and Review models, with an added column in Pottery model called 'reviews' (from previous test)
        - I deleted 'reviews' column' in schema and ran `npx prisma generate`. No Errors in Prisma.
        - It deleted the 'review' column in Pottery model. However, in Vercel's Postgres Database, there are no changes. 
        - Now, the 'review' column in Vercel's Postgres Database is deleted and now in sync with Prisma. 

        Third Test:
        - Continuing from previous test, I deleted Review model from schema.prisma file. 
        - Used `npx prisma generate` and nothing effected Postgres DB, but deleted from Prisma Client.
        - Used `npx prisma db push`, now, Review model is deleted in Postgres DB.

        Fourth Test:
        - Added Dog model and a column called 'dog' in Pottery. 
        - Used `npx prisma db push` and came out with no error. It updated both Prisma and Postgres DB. 

        In Conclusion: 
        Whenever any changes are made in schema.prisma file, I must use `npx prisma db push` to update both database schema and Prisma Schema. Not sure when I'll be using `npx prisma generate`. 