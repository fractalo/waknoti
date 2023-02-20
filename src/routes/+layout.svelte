<script lang="ts">
    import "../app.css";
    import LogoIcon from '../lib/icons/logoWithText.svelte';
    import SunIcon from '../lib/icons/sun.svelte';
    import MoonIcon from '../lib/icons/moon.svelte';

    import { onMount } from 'svelte';
    import { themeChange } from 'theme-change';

    let theme: string | null = null;

    onMount(() => {
        themeChange(false);

        new MutationObserver(() => {
            const themeColor = window.getComputedStyle(document.documentElement).backgroundColor;
            const themeColorEl = document.querySelector('meta[name="theme-color"]');
            themeColorEl?.setAttribute('content', themeColor);

            const isDarkTheme = document.documentElement.dataset.theme === 'dark';
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDarkMode === isDarkTheme) {
                localStorage.removeItem('theme');
            }
        }).observe(document.documentElement, {attributes: true});

        const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
        darkModePreference.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                theme = document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
            }
        });

        theme = localStorage.getItem('theme');
        theme ??= document.documentElement.dataset.theme = darkModePreference.matches ? 'dark' : 'light';;
    });
    

</script>

<div class="container max-w-screen-lg mx-auto">
    <div class="navbar bg-base-100 sticky top-0 z-30">
        <div class="navbar-start m-1 ml-2">
            <a href="/">
                <LogoIcon class="fill-accent-content h-10"/>
            </a>
        </div>
        <div class="navbar-end m-1 mr-2">
            <label class="swap swap-rotate">
                <input 
                    type="checkbox" 
                    data-toggle-theme="light,dark" 
                    data-act-class="ACTIVECLASS" 
                    checked={theme === 'dark'} 
                    disabled={!theme}
                />
                <SunIcon class="swap-off fill-current w-6 h-6" />
                <MoonIcon class="swap-on fill-current w-6 h-6" />
            </label>
        </div>
    </div>
      
    <slot />
</div>


