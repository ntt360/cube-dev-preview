FROM node:14.15.4 as build
WORKDIR /tmp/build
COPY . ./
RUN npm install && npm run build

FROM node:14.15.4
WORKDIR /cubedevpreview
COPY --from=build /tmp/build/dist dist/
COPY --from=build /tmp/build/package* ./
RUN npm install --production

ENV MODE pord
ENV PORT 80
EXPOSE 80

CMD ["/usr/local/bin/node", "/cubedevpreview/dist/index.js"]