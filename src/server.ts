import app from './app';
const port = process.env.PORT || 8000;
async function bootstrap() {
  app.listen(port, () => {
    console.log(`server running on port: http://localhost:${port}`);
  });
}

bootstrap();
