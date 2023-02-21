<script lang="ts">
    import "../app.css";
    import LogoIcon from '../lib/icons/logoWithText.svelte';
    import ThemeSwitcher from "../lib/themeSwitcher.svelte";
    import { users, type User } from '../assets/users';

    let isSidebarHidden = true;

    let activeUser: User | null = null;

</script>

<div class="max-w-screen-lg mx-auto">

    <div class="sticky top-0 z-40 navbar bg-base-100 ">
        <div class="block sm:hidden touch-manipulation">
            <button class="btn btn-square btn-ghost" on:click={() => isSidebarHidden = !isSidebarHidden}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
        <div class="navbar-start m-1 ml-2">
            <a href="/">
                <LogoIcon class="fill-accent-content h-8 sm:h-10"/>
            </a>
        </div>
        <div class="navbar-end m-1 mr-2">
            <ThemeSwitcher />
        </div>
    </div>
    
    <div class="flex ">
        <aside class="{isSidebarHidden ? 'hidden ' : ''}flex-none z-30 fixed sm:block sm:w-40 md:w-60 h-[calc(100vh-4rem)] overflow-y-auto touch-manipulation">
            <ul class="menu bg-base-100 py-2 px-1 sm:px-2 ">
                {#each users as user (user.id)}
                    <li class="">
                        <a href="/channels/{user.id}" class="{activeUser?.id === user.id ? "active" : ""}" on:click={() => activeUser = user}>
                            <div class="mask mask-circle w-9">
                                <img src="/img/profiles/user/{user.id}.png" alt="" />
                            </div>
                            <span class="hidden sm:inline-block" >{user.name}</span>
                        </a>
                    </li>
                {/each}
            </ul>
        </aside>
 
        <main class="{isSidebarHidden ? 'ml-0' : 'ml-20'} sm:ml-40 md:ml-60">
            <div class="mt-2.5 ml-3 md:ml-5">
                <slot />
            </div>
        </main>
    </div>
    
</div>




