import { BaseClient } from '../client/BaseClient';
import { CreateMuteKeywordResponse, MuteKeywordResponse } from '../util/Responses';

/**
 * **ミュートキーワードAPI**
 *
 * @remarks
 * 特定のキーワードのミュート設定APIのエンドポイントと連携するためのクラスです
 *
 * @see https://github.com/ekkx/yay.js
 *
 */
export class MuteKeywordAPI {
  public constructor(private readonly base: BaseClient) {}

  public createKeyword = async (options: { word: string; context: string[] }): Promise<CreateMuteKeywordResponse> => {
    return await this.base.request({
      method: 'POST',
      route: `v1/hidden/words`,
      requireAuth: false,
      json: { word: options.word, context: options.context },
    });
  };

  public deleteKeyword = async (options: { keywordIds: number[] }) => {
    return await this.base.request({
      method: 'DELETE',
      route: `v1/hidden/words`,
      requireAuth: false,
      params: { 'ids[]': options.keywordIds },
    });
  };

  public getKeywords = async (): Promise<MuteKeywordResponse> => {
    return await this.base.request({
      method: 'GET',
      route: `v1/hidden/words`,
      requireAuth: false,
    });
  };

  public updateKeyword = async (options: {
    keywordId: number;
    word: string;
    context: string[];
  }): Promise<CreateMuteKeywordResponse> => {
    return await this.base.request({
      method: 'PUT',
      route: `v1/hidden/words/${options.keywordId}`,
      requireAuth: false,
      json: { word: options.word, context: options.context },
    });
  };
}
