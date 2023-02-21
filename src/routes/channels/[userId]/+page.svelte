<script lang="ts">
    import type { TelegramChannel } from '../../../assets/telegramChannels/types';
	import type { User } from '../../../assets/users';

    export let data: {
        user: User;
        channels: TelegramChannel[];
    };


    const getNormalLink = (channel: TelegramChannel) => {
        if (channel.isPublic) {
            return `https://t.me/${channel.id}`;
        } else {
            return `https://t.me/+${channel.id}`;
        }
    }

    const getDirectLink = (channel: TelegramChannel) => {
        if (channel.isPublic) {
            return `tg://resolve?domain=${channel.id}`;
        } else {
            return `tg://join?invite=${channel.id}`;
        }
    }
</script>


<div class="avatar">
    <div class="w-12 rounded-full">
      <img src="/img/profiles/tg/{data.user.id}.png" alt="" />
    </div>

    <span>{data.user.name} 알림 채널</span>
</div>



{#each data.channels as channel (channel.id)}
    <div>
        
        <a class="btn" href={getNormalLink(channel)} target="_blank" rel="noopener noreferrer">{channel.name}</a>
        <a class="btn" href={getDirectLink(channel)} target="_blank" rel="noopener noreferrer">{channel.name} (다이렉트)</a>
        
    </div>
{/each}