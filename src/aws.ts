

import { S3 } from "aws-sdk"
import fs from "fs"

const s3 = new S3({
    accessKeyId: process.env.Aws_Access_Key_Id,
    secretAccessKey: process.env.Aws_Access_Key_Id,
})

export const uploadFile = async (fileName: string, localFilePath: string) => {
    console.log("called")
    const fileContent = fs.readFileSync(localFilePath)
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "vercel3",
        Key: fileName,
    }).promise()
    console.log(response)
}