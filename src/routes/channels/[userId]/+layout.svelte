<script lang="ts">
    import { users } from '../../../assets/users';
	import type { User } from '../../../assets/users';

    export let data: {
        currentUser: User;
        profileImageUrls: Record<string, string>;
    };

</script>


<div class="flex ">
    <aside class="flex-none z-30 sticky top-[2rem] sm:block sm:w-40 md:w-48 max-h-[calc(100vh-4rem)] overflow-y-auto touch-manipulation">
        <ul class="menu bg-base-100">
        {#each users as user (user.id)}
            <li >
                <a href="/channels/{user.id}/all" class="{data.currentUser.id === user.id ? 'active' : ''} py-3 gap-3" >
                    <div class="avatar">
                        <div class="w-9 md:w-11 rounded-full">
                            {#if user.twitchLoginName}
                                <img src={data.profileImageUrls[user.twitchLoginName]} alt={user.twitchLoginName} />
                            {:else}
                                <img src="/img/telegram/channel-profiles/{user.id}.png" alt={user.id} />
                            {/if}
                        </div>
                    </div>
                    <span class="md:text-lg font-semibold hidden sm:inline-block" >{user.name}</span>
                </a>
            </li>
        {/each}
        </ul>
    </aside>

    <main class="w-full py-2 px-1 pr-2 pb-10 md:pl-5">
        <slot />
    </main>
</div>