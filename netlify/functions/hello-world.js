exports.handler = async () => {
    const secret = process.env.MY_SECRET
    return {
      statusCode: 200,
      body: `${secret}`,
    };
  };