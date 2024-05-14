import prisma from '../../../../lib/prisma'

export async function getItems([items]) {
    try {
        // const product = await prisma.pottery.findUnique({
        //     where: {
        //         id: parseInt(id)
        //     }
        // })
        // return product
    } catch (e) {
        console.log(`Error in fetching product from 'getItems()`, e)
    }
}