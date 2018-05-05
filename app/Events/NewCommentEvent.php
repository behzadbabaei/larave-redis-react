<?php

namespace App\Events;

use App\Comment;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class NewCommentEvent implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $comment;

    /**
     * Create a new event instance.
     *
     * @param Comment $comment
     */

    public function __construct(Comment $comment)
    {
        $this->comment = $comment;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('article.'.$this->comment->article_id);

//        return new PrivateChannel('channel-name');
    }

    public function broadcastAs()
    {
        return 'NewCommentSubmited';
    }

    public function broadcastWith()
    {
        return [
            'id'=>$this->comment->id,
            'body' => $this->comment->body,
            'article_id'=>$this->comment->article->id,
            'created_at' => $this->comment->created_at->toFormattedDateString()
        ];
    }
}
