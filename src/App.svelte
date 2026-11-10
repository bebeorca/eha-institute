<script>
  import { onMount } from 'svelte';
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import LatestNews from './components/LatestNews.svelte';
  import NewsBrief from './components/NewsBrief.svelte';
  import UpcomingEvents from './components/UpcomingEvents.svelte';
  import Featured from './components/Featured.svelte';
  import Resources from './components/Resources.svelte';
  import MissionBanner from './components/MissionBanner.svelte';
  import Footer from './components/Footer.svelte';
  import MainResearchAreas from './pages/MainResearchAreas.svelte';
  import ConsultationServices from './pages/ConsultationServices.svelte';
  import ScientificWriting from './pages/ScientificWriting.svelte';
  import WebinarSeries from './pages/WebinarSeries.svelte';
  import Podcast from './pages/Podcast.svelte';
  import Training from './pages/Training.svelte';
  import ConferenceMeeting from './pages/ConferenceMeeting.svelte';
  import LeadershipStaff from './pages/LeadershipStaff.svelte';
  import WhoWeAre from './pages/WhoWeAre.svelte';
  import Career from './pages/Career.svelte';
  import News from './pages/News.svelte';
  import Publications from './pages/Publications.svelte';
  import Collaborators from './pages/Collaborators.svelte';
  import SearchResults from './pages/SearchResults.svelte';

  let currentRoute = 'home';

  function updateRoute() {
    const hash = window.location.hash;
    if (hash === '#research-areas' || hash === '#/research-areas') {
      currentRoute = 'research-areas';
    } else if (hash === '#consultation' || hash === '#/consultation') {
      currentRoute = 'consultation';
    } else if (hash === '#scientific-writing' || hash === '#/scientific-writing') {
      currentRoute = 'scientific-writing';
    } else if (hash === '#webinars' || hash === '#/webinars') {
      currentRoute = 'webinars';
    } else if (hash === '#podcast' || hash === '#/podcast') {
      currentRoute = 'podcast';
    } else if (hash === '#training' || hash === '#/training') {
      currentRoute = 'training';
    } else if (hash === '#conference' || hash === '#/conference') {
      currentRoute = 'conference';
    } else if (hash === '#leadership' || hash === '#/leadership') {
      currentRoute = 'leadership';
    } else if (hash === '#who-we-are' || hash === '#/who-we-are') {
      currentRoute = 'who-we-are';
    } else if (hash === '#careers' || hash === '#/careers' || hash === '#career' || hash === '#/career') {
      currentRoute = 'careers';
    } else if (hash === '#news' || hash === '#/news') {
      currentRoute = 'news';
    } else if (hash === '#publications' || hash === '#/publications') {
      currentRoute = 'publications';
    } else if (hash === '#collaborators' || hash === '#/collaborators') {
      currentRoute = 'collaborators';
    } else if (hash.startsWith('#search') || hash.startsWith('#/search')) {
      currentRoute = 'search';
    } else {
      currentRoute = 'home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateTo(route) {
    if (route === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = '#' + (
        route === 'research-areas' ? 'research-areas' :
        route === 'consultation' ? 'consultation' :
        route === 'scientific-writing' ? 'scientific-writing' :
        route === 'webinars' ? 'webinars' :
        route === 'podcast' ? 'podcast' :
        route === 'training' ? 'training' :
        route === 'conference' ? 'conference' :
        route === 'leadership' ? 'leadership' :
        route === 'who-we-are' ? 'who-we-are' :
        route === 'careers' ? 'careers' :
        route === 'news' ? 'news' :
        route === 'publications' ? 'publications' :
        route === 'collaborators' ? 'collaborators' :
        route === 'search' ? 'search' : ''
      );
    }
    currentRoute = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    updateRoute();
    window.addEventListener('hashchange', updateRoute);
    return () => {
      window.removeEventListener('hashchange', updateRoute);
    };
  });
</script>

{#if currentRoute === 'research-areas'}
  <MainResearchAreas />
{:else if currentRoute === 'consultation'}
  <ConsultationServices />
{:else if currentRoute === 'scientific-writing'}
  <ScientificWriting />
{:else if currentRoute === 'webinars'}
  <WebinarSeries />
{:else if currentRoute === 'podcast'}
  <Podcast />
{:else if currentRoute === 'training'}
  <Training />
{:else if currentRoute === 'conference'}
  <ConferenceMeeting />
{:else if currentRoute === 'leadership'}
  <LeadershipStaff />
{:else if currentRoute === 'who-we-are'}
  <WhoWeAre />
{:else if currentRoute === 'careers'}
  <Career />
{:else if currentRoute === 'news'}
  <News />
{:else if currentRoute === 'publications'}
  <Publications />
{:else if currentRoute === 'collaborators'}
  <Collaborators />
{:else if currentRoute === 'search'}
  <SearchResults />
{:else}
  <!-- Home Landing Page -->
  <div class="min-h-screen bg-[#3b7e57] text-white flex flex-col font-sans selection:bg-white selection:text-[#3b7e57]">
    <Navbar />

    <main class="flex-grow">
      <Hero />
      <LatestNews />
      <NewsBrief />
      <UpcomingEvents />
      <Featured />
      <Resources />
      <MissionBanner foundedYear="20XX" />
    </main>

    <Footer />
  </div>
{/if}

<!-- Quick Switcher -->
<!-- <div class="fixed bottom-4 left-4 z-50 bg-black/85 backdrop-blur-md text-white text-xs px-3 py-2 rounded-lg border border-white/20 shadow-2xl flex items-center gap-1.5 flex-wrap max-w-[95vw]">
  <span class="text-white/60 font-mono text-[10px] uppercase mr-1">Page:</span>
  {#each [
    { key: 'home', label: 'Home' },
    { key: 'research-areas', label: 'Research' },
    { key: 'consultation', label: 'Consultation' },
    { key: 'scientific-writing', label: 'Writing' },
    { key: 'webinars', label: 'Webinars' },
    { key: 'podcast', label: 'Podcast' },
    { key: 'training', label: 'Training' },
    { key: 'conference', label: 'Conference' },
    { key: 'leadership', label: 'Leadership' },
    { key: 'who-we-are', label: 'Who We Are' },
    { key: 'careers', label: 'Career' },
    { key: 'news', label: 'News' },
    { key: 'publications', label: 'Publications' },
    { key: 'collaborators', label: 'Collaborators' },
    { key: 'search', label: 'Search' }
  ] as p}
    <button
      type="button"
      on:click={() => navigateTo(p.key)}
      class="px-2 py-0.5 rounded font-semibold transition-colors text-[11px] {currentRoute === p.key ? 'bg-[#3b7e57] text-white shadow-sm' : 'text-white/70 hover:text-white'}"
    >
      {p.label}
    </button>
  {/each}
</div> -->
