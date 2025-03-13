import privateClient from "../client/private.client";

const watchedEndpoints = {
  list: "user/watched",
  add: "user/watched",
  remove: ({ watchedId }) => `user/watched/${watchedId}`
};

const watchedApi = {
  getList: async () => {
    try {
      const response = await privateClient.get(watchedEndpoints.list);

      return { response };
    } catch (err) { return { err }; }
  },
  add: async ({
    mediaId,
    mediaType,
    mediaTitle,
    mediaPoster,
    mediaRate
  }) => {
    try {
      const response = await privateClient.post(
        watchedEndpoints.add,
        {
          mediaId,
          mediaType,
          mediaTitle,
          mediaPoster,
          mediaRate
        }
      );

      return { response };
    } catch (err) { return { err }; }
  },
  remove: async ({ watchedId }) => {
    try {
      const response = await privateClient.delete(watchedEndpoints.remove({ watchedId }));

      return { response };
    } catch (err) { return { err }; }
  }
};

export default watchedApi;
