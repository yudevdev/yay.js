/**
 * リッスンイベント
 *
 * @remarks
 * WebSocket通信等でリッスンするイベントです
 *
 * @see https://github.com/ekkx/yay.js
 *
 */
export const Events: { [key: string]: string } = {
  ChatRequest: 'chatRequest',
  ChatRoomDelete: 'chatRoomDelete',
  ClientReady: 'ready',
  MessageCreate: 'messageCreate',
  GroupUpdate: 'groupUpdate',
  WebSocketTokenExpire: 'webSocketTokenExpire',
};
