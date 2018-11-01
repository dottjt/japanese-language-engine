const mutations = {
  updateOptionsTone: async (_: any, { value }: any, { cache, getCacheKey }: any) => {
    await cache.writeData({
      data: { options: { politeness: value } }
    });
    return null;
  }  
}

export default mutations;
