<script lang="ts">
    import { users } from '../assets/users';
    import { telegramChannelLists } from '../assets/telegramChannels';
	import type { TelegramChannel } from '../assets/telegramChannels/types';

    let activeUserId = users[0].id;
    $: channelList = telegramChannelLists.get(activeUserId) || [];

    const handleUserClick = (id: string) => {
        activeUserId = id;
    };

    const getHttpsLink = (channel: TelegramChannel) => {
        if (channel.isPublic) {
            return `https://t.me/${channel.id}`;
        } else {
            return `https://t.me/+${channel.id}`;
        }
    }

    const getTgLink = (channel: TelegramChannel) => {
        if (channel.isPublic) {
            return `tg://resolve?domain=${channel.id}`;
        } else {
            return `tg://join?invite=${channel.id}`;
        }
    }
    
</script>

<style>    
</style>

<div>
    <h3 class="m-4">이세계 아이돌, 우왁굳 방송 관련 알림 텔레그램 채널 모음</h3>

    <div class="flex flex-row">
        <div class="basis-1/4">
            <ul class="menu bg-base-100 p-2 rounded-box">
                {#each users as user (user.id)}
                    <li>
                        <a href={null} class={activeUserId === user.id ? "active" : ""} on:click={() => handleUserClick(user.id)}>
                            <div class="mask mask-circle w-8">
                                <img src="/img/profiles/user/{user.id}.png" alt="" />
                            </div>
                            {user.name}
                        </a>
                    </li>
                {/each}
              </ul>
        </div>
        
        <div class="basis-3/4">
            {#each channelList as channel (channel.id)}
                <div>
                    <a class="btn " href={getHttpsLink(channel)} target="_blank" rel="noopener noreferrer">{channel.name}</a>
                    <a class="btn " href={getTgLink(channel)} target="_blank" rel="noopener noreferrer">{channel.name} (다이렉트)</a>
                </div>
            {/each}
        </div>
        
    </div>
</div>




