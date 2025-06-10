import request from "@/utils/request";

//获取人物信息
export function personInfo() {
  return request({
    url: "/lab/recordPerson/lab_list",
    method: "get",
  });
}

//英文文章
export function englishArticle() {
  return request({
    url: "/lab/articleEN/list_en",
    method: "get",
  });
}

//中文文章
export function chineseArticle() {
  return request({
    url: "/lab/articleCN/list_cn",
    method: "get",
  });
}

//在线课程
export function onlineCourse() {
  return request({
    url: "/lab/onlineCourse/list_onlineCourse",
    method: "get",
  });
}

//幸福书屋
export function happyBook() {
  return request({
    url: "/lab/books/list_books",
    method: "get",
  });
}

//招募
export function recruit() {
  return request({
    url: "/lab/talents/list_talents",
    method: "get",
  });
}
//新增联系我们
export function addContact(data) {
  return request({
    url: "/lab/concatUS/add_contact",
    data,
    method: "post",
  });
}

//动态
export function dynamic() {
  return request({
    url: "/lab/dynimic/list_dynimic",
    method: "get",
  });
}


