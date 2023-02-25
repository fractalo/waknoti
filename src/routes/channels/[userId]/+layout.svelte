<script lang="ts">
    import { users } from '../../../assets/users';
	import type { User } from '../../../assets/users';

    export let data: {
        currentUser: User;
    };


</script>


<div class="flex ">
    <aside class="flex-none z-30 sticky top-[2rem] sm:block sm:w-40 md:w-48 max-h-[calc(100vh-4rem)] overflow-y-auto touch-manipulation">
        <ul class="menu bg-base-100 p-2 ">
        {#each users as user (user.id)}
            <li class="">
                <a href="/channels/{user.id}" class="{data.currentUser.id === user.id ? 'active' : ''}" >
                    <div class="mask mask-circle w-9">
                        <img src="/img/profiles/user/{user.id}.png" alt={user.id} />
                    </div>
                    <span class="hidden sm:inline-block" >{user.name}</span>
                </a>
            </li>
        {/each}
        </ul>
    </aside>

    <main class="w-full py-2 px-1 pr-2 pb-20 sm:pb-10 md:pl-5">
        <slot />
    </main>
</div>