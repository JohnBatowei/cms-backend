import fs from 'fs';
import path from 'path';

export default () => {
  return async (ctx, next) => {
    // List of React app routes (you can add more routes as needed)
    const reactRoutes = [
      '/',
      '/student/dashboard',
    //   '/student/profile',
    //   '/student/settings', // Add more routes as necessary
      // Include other routes that React will handle
    ];

    // Check if the route is in the list of routes React should handle
    if (reactRoutes.includes(ctx.path) || ctx.path.startsWith('/student')) {
      ctx.type = 'html';
      const indexPath = path.join(strapi.dirs.static.public, 'index.html');
      ctx.body = fs.createReadStream(indexPath);
    } else {
      await next(); // Allow Strapi to handle the route if it's not a React route
    }
  };
};
