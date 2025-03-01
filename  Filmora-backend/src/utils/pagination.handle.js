export const paginate = async (Model, page = 1, limit = 10, query = {}) => {
    const skip = (page - 1) * limit;
  
    const [data, totalDocuments] = await Promise.all([
      Model.find(query).skip(skip).limit(limit),
      Model.countDocuments(query)
    ]);
  
    return {
      data,
      currentPage: page,
      totalPages: Math.ceil(totalDocuments / limit),
      totalDocuments
    };
  };