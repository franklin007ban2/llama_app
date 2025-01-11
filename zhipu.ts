import { ZhipuAI } from 'zhipuai-sdk-nodejs-v4';

const createEmbeddings = async () => {
    const ai = new ZhipuAI({
        apiKey: '9fcb4a484e274be7baecc084a3ee9417.y6feosES220aOook',
        baseUrl: 'https://open.bigmodel.cn/api/paas/v4'
    })
    const result = await ai.createEmbeddings({
        model: "embedding-3",
        input: "你好，请问你是谁",
        encodingFormat: '',
        user: '',
        sensitiveWordCheck: undefined as any
    })
    console.log(result.data, "embedding")
}

// 调用 async 函数
const main = async () => {
    await createEmbeddings();
}

// 确保 main 执行完毕
main();
