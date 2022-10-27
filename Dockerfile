FROM amazon/aws-lambda-nodejs:16
COPY package.json .
RUN npm i
COPY . .
CMD ['index.handler']
