module.exports = {
  apps: [
    {
      name: "my-app1",
      script: "dist/index.js", // Chạy file JavaScript đã biên dịch
      watch: false,
      interpreter: "node", // Sử dụng Node.js để chạy file JavaScript
    },
  ],
};
