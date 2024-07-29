async function hello(event: any, context: any) {
  try {
    return {
      message: 'Go Serverless v3! Your function executed successfully!',
      input: event,
    };
  }
  catch (e) {
      console.error(e);
      return 500;
  }
}

export const handler = hello;