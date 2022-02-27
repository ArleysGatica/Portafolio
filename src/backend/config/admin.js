module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a08cfc96a963bb5aad7be6141e490d40'),
  },
});
