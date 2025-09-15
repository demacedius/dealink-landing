<script>
  import { TrendingUp, Target, ArrowRight, Clock, Shield, Users, Zap, Award } from 'lucide-svelte';
  

  let activeTab = 'porteurs';

    const porteursAdvantages = [
    {
      icon: TrendingUp,
      title: "Multipliez vos revenus",
      description: "Acceptez jusqu'à 3x plus de projets sans compromis qualité",
      class: "w-6 h-6 text-blue-500"
    },
    {
      icon: Clock,
      title: "Gagnez du temps",
      description: "Déléguez en 2 clics, gardez le contrôle total",
      class: "w-6 h-6 text-green-500"
    },
    {

      icon: Shield,
      title: "Qualité garantie",
      description: "Freelances vérifiés et notés par la communauté",
      class: "w-6 h-6 text-purple-500"
    },
    {
      icon: Users,
      title: "Réseau premium",
      description: "Accès exclusif aux meilleurs talents disponibles",
      class: "w-6 h-6 text-orange-500"
    }
  ];

  const freelancesAdvantages = [
    {
      icon: Target,
      title: "Missions qualifiées",
      description: "Projets présélectionnés par des pairs expérimentés",
      class: "w-6 h-6 text-blue-500"
    },
    {
      icon: Zap,
      title: "Démarrage immédiat",
      description: "Brief complet, contexte clair, démarrez directement",
      class: "w-6 h-6 text-green-500"
    },
    {
      icon: Award,
      title: "Rémunération juste",
      description: "Tarifs transparents, paiement sécurisé garanti",
      class: "w-6 h-6 text-purple-500"
    },
    {
      icon: Users,
      title: "Réseau de qualité",
      description: "Collaborez avec des freelances établis et reconnus",
      class: "w-6 h-6 text-orange-500"
    }
  ];
  
</script>

<section id="dualaudience" class="py-20 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Dealink s'adapte à votre situation
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Que vous soyez débordé de projets ou en recherche de nouvelles missions, 
            découvrez comment Dealink transforme votre activité freelance
          </p>
        </div>

      
        <div class="flex justify-center mb-12">
          <div class="bg-gray-100 p-1 rounded-xl">
            <button
              on:click={() => activeTab = 'porteurs'}
              class="px-6 py-3 rounded-lg font-medium transition-all {activeTab === 'porteurs' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}"
            >
              J'ai trop de projets
            </button>
            <button
              on:click={() => activeTab = 'freelances'}
              class="px-6 py-3 rounded-lg font-medium transition-all {activeTab === 'freelances' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}"
            >
              Je cherche des missions
            </button>
          </div>
        </div>

        
        {#if activeTab === 'porteurs'}
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                <svelte:component this={TrendingUp} class="w-5 h-5 text-blue-500" />
                <span class="text-blue-600 font-medium">Pour les porteurs d'affaires</span>
              </div>
              
              <h3 class="text-3xl font-bold text-gray-900 mb-6">
                Transformez votre surcharge en opportunité
              </h3>
              
              <p class="text-lg text-gray-600 mb-8">
                Vous croulez sous les demandes ? Dealink vous permet de déléguer 
                intelligemment tout en gardant vos clients et votre réputation.
              </p>

              <div class="space-y-6 mb-8">
                {#each porteursAdvantages as advantage}
                  <div class="flex items-start space-x-4">
                    <div class="bg-gray-50 p-3 rounded-lg">
                      <svelte:component this={advantage.icon} class={advantage.class} />
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">
                        {advantage.title}
                      </h4>
                      <p class="text-gray-600">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                {/each}
              </div>

              <div class="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h4 class="font-bold text-blue-900 mb-3">Inscription prioritaire</h4>
                <p class="text-blue-700 mb-4">
                  Rejoignez 847 porteurs d'affaires déjà inscrits
                </p>
                <form  class="flex space-x-2">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                   
                   
                    class="flex-1 px-4 py-2 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-md ">
                    <svelte:component this={ArrowRight} class="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>

            <div class="lg:pl-8">
              <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <h4 class="text-xl font-bold mb-6">Votre processus simplifié</h4>
                <div class="space-y-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span>Publiez votre mission en 2 minutes</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span>Recevez des candidatures qualifiées</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span>Déléguez et gardez le contrôle</span>
                  </div>
                </div>
                <div class="mt-6 pt-6 border-t border-white/20">
                  <p class="font-medium">Commission : 0% les 3 premiers mois</p>
                  <p class="text-blue-100 text-sm">Puis seulement 5% sur les missions réussies</p>
                </div>
              </div>
            </div>
          </div>
        {/if}

       
        {#if activeTab === 'freelances'}
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
                <svelte:component this={Target} class="w-5 h-5 text-green-500" />
                <span class="text-green-600 font-medium">Pour les freelances</span>
              </div>
              
              <h3 class="text-3xl font-bold text-gray-900 mb-6">
                Accédez aux meilleures opportunités
              </h3>
              
              <p class="text-lg text-gray-600 mb-8">
                Fini la prospection intensive ! Accédez à des missions 
                présélectionnées par des freelances établis qui vous font confiance.
              </p>

              <div class="space-y-6 mb-8">
                {#each freelancesAdvantages as advantage}
                  <div class="flex items-start space-x-4">
                    <div class="bg-gray-50 p-3 rounded-lg">
                      <svelte:component this={advantage.icon} class={advantage.class} />
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">
                        {advantage.title}
                      </h4>
                      <p class="text-gray-600">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                {/each}
              </div>

              <div class="bg-green-50 rounded-xl p-6 border border-green-100">
                <h4 class="font-bold text-green-900 mb-3">Inscription prioritaire</h4>
                <p class="text-green-700 mb-4">
                  Rejoignez 400 freelances dans la file d'attente
                </p>
                <form  class="flex space-x-2">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                   
                    class="flex-1 px-4 py-2 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                  <button type="submit" class="bg-green-500 hover:bg-green-600 text-white p-4 rounded-md">
                    <svelte:component this={ArrowRight} class="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>

            <div class="lg:pl-8">
              <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
                <h4 class="text-xl font-bold mb-6">Votre parcours optimisé</h4>
                <div class="space-y-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span>Créez votre profil vérifié</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span>Recevez des missions adaptées</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span>Travaillez et développez votre réseau</span>
                  </div>
                </div>
                <div class="mt-6 pt-6 border-t border-white/20">
                  <p class="font-medium">Accès gratuit à vie</p>
                  <p class="text-green-100 text-sm">Aucune commission sur vos revenus</p>
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </section>