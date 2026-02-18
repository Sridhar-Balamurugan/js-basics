function myPromiseFunction() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("✅ Promise executed successfully!");
    }, 2000);
});
}

async function main() {
    try {
    const result = await myPromiseFunction();
    console.log(result);
} catch (error) {
    console.log("Error:", error);
    }
}

main();
