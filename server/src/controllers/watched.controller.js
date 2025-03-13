import responseHandler from "../handlers/response.handler.js";
import watchedModel from "../models/watched.model.js";

const addWatched = async (req, res) => {
  try {
    const isWatched = await watchedModel.findOne({
      user: req.user.id,
      mediaId: req.body.mediaId
    });

    if (isWatched) return responseHandler.ok(res, isWatched);

    const watched = new watchedModel({
      ...req.body,
      user: req.user.id
    });

    await watched.save();

    responseHandler.created(res, watched);
  } catch {
    responseHandler.error(res);
  }
};

const removeWatched = async (req, res) => {
  try {
    const { watchedId } = req.params;

    const watched = await watchedModel.findOne({
      user: req.user.id,
      _id: watchedId
    });

    if (!watched) return responseHandler.notfound(res);

    await watched.remove();

    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};

const getWatchedOfUser = async (req, res) => {
  try {
    const watched = await watchedModel.find({ user: req.user.id }).sort("-createdAt");

    responseHandler.ok(res, watched);
  } catch {
    responseHandler.error(res);
  }
};

export default { addWatched, removeWatched, getWatchedOfUser };
