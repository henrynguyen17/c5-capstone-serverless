import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors, httpErrorHandler } from 'middy/middlewares'

import { createAttachmentPresignedUrl } from '../../businessLogic/todos'
import { getUserId } from '../utils'

import { createLogger } from '../../utils/logger'

const logger = createLogger("generateUploadUrl");

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info("## GENERATE UPLOAD URL ##");
    try {
      const todoId = event.pathParameters.todoId
      
      // TODO: Return a presigned URL to upload a file for a TODO item with the provided id
      const user = getUserId(event);
      const url = await createAttachmentPresignedUrl(todoId, user);
      logger.info("## GENERATE UPLOAD URL SUCCESSFULLY ##");
      return {
        statusCode: 201,
        body: JSON.stringify({
          uploadUrl: url
        })
      }
    } catch (error) {
      logger.error('## GENERATE UPLOAD FAILED: ', { error: error.message })
      return {
        statusCode: 500,
        body: JSON.stringify({
          "message": "System errors"
        })
      }
    }
  }
)

handler
  .use(httpErrorHandler())
  .use(
    cors({
      credentials: true
    })
  )
