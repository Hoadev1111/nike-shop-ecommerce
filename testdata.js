
const obj = {
    blog: "homiedev.com",
    categories: ["ReactJS", "JavaScript", "TypeScript"],
    isFrontEndBlog: true,
};

obj[Symbol.iterator] = function () {
    let i = 0;
    let values = Object.values(this);

    return {
        next: () => {
            return {
                value: values[i++],
                done: i > values.length,
            };
        },
        return: () => {
            console.log("Dừng gọi next()...");

            return {
                done: true,
                value: undefined,
            };
        },
    };
};

console.log(obj);