FROM artifactory.awsmgmt.massmutual.com/massmutual/node:14.17.3-alpine3.14 AS Base

USER node

# Create a directory to hold the application code
ENV APP_ROOT /home/node/app

# Switch over to the newly created user
RUN mkdir $APP_ROOT && chown node:node $APP_ROOT

WORKDIR ${APP_ROOT}

ENV NODE_ENV=development

COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn.lock ./

RUN  yarn config set registry https://artifactory.awsmgmt.massmutual.com/artifactory/api/npm/npm-virtual/

RUN yarn install --freeze-lockfile

COPY --chown=node:node ./src ./src
COPY --chown=node:node index.html ./
COPY --chown=node:node vite.config.js ./

RUN NODE_ENV=production yarn build

EXPOSE 3000

ENTRYPOINT ["/usr/local/bin/yarn"]

FROM artifactory.awsmgmt.massmutual.com/massmutual/nginx:stable-alpine AS Serve
EXPOSE 80
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=Base /home/node/app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
