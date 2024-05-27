# GOAL
Create an e-commerce for pottery with Next.js, Prisma, and Vercel. 
(Remaking Kiln Me Softly Project)

## Links:
1) How to Build a Fullstack App with Next.js, Prisma, and Vercel Postgres [https://vercel.com/guides/nextjs-prisma-postgres]
2) Oodles : [https://github.com/Oodles-App/Oodles-2.0/blob/main/pages/index.js]
3) Discussion page:  [https://github.com/vercel/next.js/discussions/59373]

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

### 4/18
 - I was doing Step 5 of Link 1. I've ran into a problem with using 'getStaticProps' in pages.js It says that it's not supported in app. Couldn't find the answer after 3 hours of searching..

 ### 5/1
- Errors with "getStaticProps": 
    - Reviewed what the error from the last time I touched this project. 
    - Tried other fetching method like `getServerProps` and `fetch('/')`, but also got an error saying that it's not supported in the app or error. 
    - Researched on Prisma document ([https://www.prisma.io/docs/orm/overview/prisma-in-your-stack/rest]) and continued to search in this code to see examples of how they retreive data ([https://github.com/prisma/prisma-examples/blob/latest/javascript/rest-nextjs/src/app/page.jsx]). 
    - Finally found a way to fetch data from database without errors. 
- Creating Navbar
    - Used this as a refererence: [https://codewithmarish.com/post/how-to-create-responsive-navbar-in-next-js]
- Created a simple landing page


### 5/3
- Researching best way to organize between client and server components: [https://youtu.be/gLFT1wYd7G0?si=NlpCnGSG8U2k41JH]

- Learned between client and server-side components and how they are used: [https://youtu.be/8pzIuLFuv6U?si=aepnP_-pKLCANcfB] 

- Created dynamic route to a single product page. 

### 5/6
- <Image /> is more secure than <img />. <Image /> would not allow me to use external sources unless I name each domain in next.config.mjs. 
- Adjusted products page with CSS. (Still need to do pagination).
- Adjsuted single prouduct page with CSS. (Still needs more work).

### 5/7
- Handling decrements, increments, onChange on singleProducts page: [https://nextjs.org/learn/react-foundations/updating-state]


### 5/13 
- Looking into Local Storage: [https://articles.wesionary.team/using-localstorage-with-next-js-a-beginners-guide-7fc4f8bfd9dc] 
    - Built in Methods:
        1) setItem(key, value)
            - When using setItem, had to use product.id as 'key'
        2) getItem (key)
        3) removeItem (key)
        4) clear()
        5) key(index)
        6) length()
- Created About, Contact, and Cart route
- Got rid of the Navbar in individual pages and added Navbar globally on layout.js page
- Goal today is to be able to save items into local storage, and be able to list out all products in 'cart' page. 
    - Currently able to save items to local storage
##### Issues for today: 
  1) Not being able to get product's data with prisma. 
    -  I tried creating a new function in a new page in 'app/api/cart' that fetches a product with id as it's argument. 
    - I also tried fetching the product's data in the useEffect.
    These two different ways caused the same error: "Error: PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `unknown`)." 
  2) Not being able to render cart image on the Navbar. No error is shown; Icon does not appear.
    - Tried different formats: jpg and png

### 5/17 
Goal: Create the cart page that displays all the products saved in cart.
- Created a function called "fetchLocalStorageProducts" that takes in an array of productIds, then used Prisma to search and return product's detail. 
    - Problems: Tried different ways and aways ran into the issue about 'prismaClient is unable to run in this browser environment..." 
    - Attempts: 
        1) Tried to use in Client component (app/(routes)/cart/pages.jsx)
            - Local storage is rendered in client server. I don't think it's possible to fetch local storage key,value pairs and send it to this page. 
            - Tried writing another function above the default function in Cart.jsx, but still error.
            - Used useEffect(), but cannot use prisma in app/components/Cart because it's client component. 
            - Tried with getSideServerProps, but as we know, it's deprecated from App Routers.
            - Tried "fetch('/api/getCart').then ... ", but error in useEffect. 
    - Solution: used 'use server' on the top of the api/getCart page. 

### 5/18
- Updated handleCart button: updates current localStorage if the same product is in local storage. 
- Updated Cart page layout. 
- Currently working on Navbar updating how many items are currently in cart, but some issues currently. 
    - Trouble: 
        - It does not automatically update when I add another item to cart. I need to refresh the page to see the updated number. 
        - Used window.location.reload() to refresh the page after pressing "add to cart" button, but I don't think this is long-term solution
- Creating Contact form layout.
    - Using this website as resource" [https://www.maisonclay.com/contact]
    - Reference for later : [https://react.dev/reference/react-dom/components/form]

### 5/27 
- Updating Contact page:
    - Created functions where it saves the value of each textbox in State while typing (onChange).
        - Is there a way to create DRY? 
    - Created a fuction that validates emails (searches if there's '@', the email service, and top-level domain)
    - Created a 'submit' button, but does not submit yet. It only verifies that nothing is empty in the form. 
        - Need to research how to use Mandril to automatically send email once 'submit' button is clicked. 
