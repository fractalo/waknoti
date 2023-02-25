<script lang="ts">
    import "../app.css";
    import Logo from '../lib/logo/logoWithText.svelte';
    import QuestionMarkIcon from '../lib/icons/questionMark.svelte';
    import MegaphoneIcon from "../lib/icons/megaphone.svelte";
    import ThemeSwitcher from "../lib/themeSwitcher.svelte";
    import GithubIcon from '../lib/icons/github.svelte';
    import NaverCafeIcon from '../lib/icons/naverCafe.svelte';
    import { page } from "$app/stores";

    

</script>


<div class="max-w-screen-lg mx-auto sm:px-6 min-h-screen">
    <div class=" top-0 z-40 navbar bg-base-100 px-4 sm:px-0">
        <div class="navbar-start">
            <a href="/" class="btn btn-ghost px-3">
                <Logo class="fill-accent-content h-8 sm:h-10"/>
            </a>
        </div>
        <div class="navbar-end">
            {#if $page.url.pathname.startsWith('/channels/')}
            <a href="/help" class="btn btn-ghost btn-square ">
                <QuestionMarkIcon class="w-6 h-6" />
            </a>
            {:else if $page.url.pathname !== '/'}
            <a href="/channels" class="btn btn-ghost btn-square ">
                <MegaphoneIcon class="w-6 h-6" />
            </a>
            {/if}
            <ThemeSwitcher />
        </div>
    </div>
    
    <slot />
</div>

<footer class="footer footer-center p-6 bg-base-300 text-base-content">
    <div>
        <a class="link link-hover flex gap-1" href="https://cafe.naver.com/steamindiegame" target="_blank" rel="noopener noreferrer">
            <NaverCafeIcon class="w-5 h-5" /> 왁물원
        </a>
        <a class="link link-hover flex gap-1" href="https://github.com/fractalo/waknoti" target="_blank" rel="noopener noreferrer">
            <GithubIcon class="w-5 h-5" /> WakNoti
        </a>
        <a class="link link-hover flex gap-1" href="https://github.com/fractalo/twitch-notifier" target="_blank" rel="noopener noreferrer">
            <GithubIcon class="w-5 h-5" /> 트위치 알림 봇
        </a>
    </div>
</footer>




