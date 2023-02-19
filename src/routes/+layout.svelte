<script lang="ts">
    import "../app.css";
    import LogoIcon from '../lib/icons/logo.svelte';
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


<div class="navbar bg-base-100">
    <div class="navbar-start m-1">
        <LogoIcon class="h-10 w-10 "/>
    </div>
    <div class="navbar-end m-1">
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