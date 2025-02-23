// SDK利用準備
import type { MicroCMSQueries, MicroCMSListContent, MicroCMSImage } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type GuraburuPost = {
  id: string;
  name: string;
}

export type GuildPost = {
  id: string;
  name: string;
}

// 型定義
export type Member = {
  name: string;
  guraburu_name: string;
  guraburu_post: GuraburuPost;
  discord_name: string;
  thumb: MicroCMSImage;
  post: GuildPost;
  board_flg: boolean;
} & MicroCMSListContent;

// APIの呼び出し
export const getMembers = async (queries?: MicroCMSQueries) => {
  return await client.getList<Member>({ endpoint: "member", queries });
};

// export const getBlogDetail = async (
//   contentId: string,
//   queries?: MicroCMSQueries
// ) => {
//   return await client.getListDetail<Blog>({
//     endpoint: "blogs",
//     contentId,
//     queries,
//   });
// };