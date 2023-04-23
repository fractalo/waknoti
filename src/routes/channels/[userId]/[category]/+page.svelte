<script lang="ts">
    import type { TelegramChannel } from '../../../../assets/telegramChannels/types';
	import type { User } from '../../../../assets/users';
	import type { Tab } from '../types';
    import GlobeIcon from '../../../../lib/icons/globe.svelte';
    import TelegramIcon from '../../../../lib/icons/telegram.svelte';

    export let data: {
        currentUser: User;
        channels: TelegramChannel[];
        currentCategory: string;
        categoryTabs: Tab[];
    };

    const getNormalLink = (channel: TelegramChannel) => {
        return channel.isPublic ? `https://t.me/${channel.id}` : `https://t.me/+${channel.id}`;
    };
    const getDirectLink = (channel: TelegramChannel) => {
        return channel.isPublic ? `tg://resolve?domain=${channel.id}` : `tg://join?invite=${channel.id}`;
    };
    const getPreviewLink = (channel: TelegramChannel) => {
        return channel.isPublic ? `https://t.me/s/${channel.id}` : null;
    };


</script>


<div class="sm:flex mb-4">
    <h2 class="flex-1 ml-1 text-2xl font-bold">{data.currentUser.name} 알림 채널</h2>

    <div class="flex-none tabs mt-2.5 mr-2 touch-manipulation">
        {#each data.categoryTabs as tab (tab.id)}
            <a 
                href="/channels/{data.currentUser.id}{tab.id !== 'all' ? `/${tab.id}` : ''}" 
                class="tab tab-bordered" 
                class:tab-active={tab.id === data.currentCategory}
            >{tab.name}</a> 
        {/each}
      </div>
</div>

<div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-3 ">
{#each data.channels as channel (channel.id)}
    <div class="card w-full bg-base-200 ">
        <div class="card-body p-4 sm:p-6">
            <h2 class="flex">
                <a href={getNormalLink(channel)} target="_blank" rel="noopener noreferrer">
                    <div class="mask mask-circle w-8">
                        <img src="/img/profiles/tg/{data.currentUser.id}.png" alt="" />
                    </div>
                </a>
                
                <div class="ml-2 font-bold break-keep">
                    {channel.name}
                </div>
            </h2>

            <p class="break-keep">
                {channel.description} 알림
            </p>
            
            <div class="card-actions justify-end">
                {#if channel.isPublic}
                <a class="btn min-h-0 h-10 px-3" href={getPreviewLink(channel)} target="_blank" rel="noopener noreferrer">
                    <GlobeIcon class="w-5 h-5 mr-1" />미리보기
                </a>
                {/if}
                <a class="btn btn-primary min-h-0 h-10 " href={getDirectLink(channel)}>
                    <TelegramIcon class="w-5 h-5 mr-1" />열기
                </a>
            </div>
            
        </div>
    </div>
{/each}
</div>