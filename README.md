# AC S3 期末考Q1 Middleware實做
- 該middleware會於收到`req`時將下列幾項顯示於終端機上
- 時間戳記
- HTTP方法
- 網址

### 環境建置


- 使用終端機從github clone本專案
   ```
   $ git clone https://github.com/TomatoSoup0126/Middleware-log-req.git
   ```

- 移至本專案資料夾中 
  ```
  $cd [路徑名稱]
  ```
- 安裝相關聯npm檔案
  ```
  $ npm install
  ```
- 安裝nodemon (選擇性)
  ```
  $ npm install -g nodemon
  ```


### 啟動伺服器
```
$ npm run dev
```
若成功啟動，終端機會顯示
`App running on port 3000`


### 連至網頁
於瀏覽器中輸入下列網址
```
http://localhost:3000/
```
便可連至該專案網頁


### 關閉伺服器
於終端機中輸入`control`+`C`即可關閉伺服器結束本專案

## 使用工具
- [Node.js](https://nodejs.org/en/) - 伺服器建置
- [Express](https://www.npmjs.com/package/express) - 伺服器建置
- [handlebars](https://handlebarsjs.com/) - 網頁模版引擎
- [Bootstrap](https://getbootstrap.com/) - 前端樣式



