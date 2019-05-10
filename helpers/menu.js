import { isObjectLiteral } from 'conjunction-junction';

export const formatCategoriesAndTagsFromPost = post => {

  const p = isObjectLiteral(post) ? post : {} ;

  const cats = Array.isArray(p.categories) ? p.categories : [] ;
  const tags = Array.isArray(p.tags) ? p.tags : [] ;
  
  const catsO = {};
  const tagsO = {};

  const categoriesAndTags = [];

  cats.forEach(x=>{
    categoriesAndTags.push(x.name)
    catsO[x.slug] = true;
  });

  tags.forEach(x=>{
    categoriesAndTags.push(x.name)
    tagsO[x.slug] = true;
  });

  return {
    categoriesAndTags,
    categoriesObject: catsO,
    tagsObject: tagsO,
  }

};

export const formatMockPost = newState => {
  // interpret categories object and tags objects in state
  // to create a mock post that lists categories and tags
  // identically to a real post
  const post = {
    categories: [],
    tags: [],
  };
  const catsO = newState.categoriesObject || {} ;
  const tagsO = newState.tagsObject || {} ;

  for(let cat in catsO){
    if(catsO[cat] && catsO[cat] !== 'ghost'){
      post.categories.push(
        {
          name: cat,
          slug: cat,
        }
      );
    }
  }
  for(let tag in tagsO){
    if(tagsO[tag] && tagsO[tag] !== 'ghost'){
      post.tags.push(
        {
          name: tag,
          slug: tag,
        }
      );
    }
  }
  return post;
}

export const calcTopicsState = (catsO, tagsO, posts) => {
  const c = isObjectLiteral(catsO) ? catsO : {} ;
  const t = isObjectLiteral(tagsO) ? tagsO : {} ;
  const p = Array.isArray(posts) ? posts : [] ;

  const cArr = [];
  for(let key in c){
    const val = c[key] && c[key] !== 'ghost' ? key[0] : '' ;
    if(val) cArr.push(val);
  }
  const tArr = [];
  for(let key in t){
    const val = t[key] && t[key] !== 'ghost' ? key.slice(0,2) : '' ;
    if(val) tArr.push(val);
  }

  const cS = cArr.sort().join('_');
  const tS = tArr.sort().join('_');

  return `P:${p.length}-C:${cArr.length}-T:${tArr.length} C:${cS}-T:${tS}`;
};