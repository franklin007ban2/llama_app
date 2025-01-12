process.on('beforeExit', (code) => {
    console.log(`Process is about to exit with code: ${code}`);
  });

const func = async function () {
    const result = await Promise.resolve(42);
    console.log(result); // 输出: 42
}
func()

