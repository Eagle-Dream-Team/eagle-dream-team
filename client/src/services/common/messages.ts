import api, { handleApiError } from "@/lib/axios";
import type { PaginationParams } from "@/models/common";
import type { Conversation, Message } from "@/models/message";
import type { PaginatedResult } from "@server/common/dto/pagination.dto";

export async function getConversations(): Promise<Conversation[]> {
  try {
    const { data } = await api.get<Conversation[]>("/message/conversations");
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function getMessages(
  peerId: string,
  currentUserId: string,
  params?: PaginationParams,
): Promise<PaginatedResult<Message>> {
  try {
    const { data } = await api.get<PaginatedResult<Message>>(
      `/message/conversation/${peerId}`,
      {
        params: { user1_id: currentUserId, user2_id: peerId, ...params },
      },
    );
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}

export async function sendMessage(receiverId: string, content: string) {
  try {
    const { data } = await api.post("/message/send", {
      receiver_id: receiverId,
      content,
    });
    return data;
  } catch (error) {
    return handleApiError(error);
  }
}
