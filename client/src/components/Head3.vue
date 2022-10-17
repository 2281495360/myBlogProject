<template>
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="w-full navbar bg-base-300 h-8">
                <div class="flex-none lg:hidden">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <div class="navbar-start">
                    <div class="px-2 mx-2 normal-case text-xl font-extrabold hidden lg:inline-flex">
                        Wz's Blog
                    </div>
                    <ul class="menu menu-horizontal p-2 rounded-box hidden lg:inline-flex">
                        <!-- Navbar menu content here -->
                        <li><a>首页</a></li>
                        <li><a>分类</a></li>
                        <li><a>标签云</a></li>
                        <li><a>关于</a></li>
                        <li><a>后台管理</a></li>
                    </ul>
                </div>
                <div class="navbar-center lg:hidden">
                    <div class="px-2 mx-2 normal-case text-xl font-extrabold">
                        Wz's Blog
                    </div>
                </div>
                <div class="navbar-end">
                    <button class="btn btn-ghost btn-circle lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" class="m-1 btn btn-ghost btn-sm">{{colorName}}</div>
                        <ul tabindex="0" class="
                p-2
                shadow
                menu
                dropdown-content
                bg-base-100
                rounded-box
                w-52
              " data-choose-theme>
                            <li v-for="color in colorList" :key="color">
                                <a @click="changeme(color)" :data-set-theme="color">{{
                                color
                                }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="form-control hidden lg:inline-flex">
                        <div class="input-group">
                            <input type="text" placeholder="Search…" class="input input-bordered" />
                            <button class="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Page content here -->
            <!-- <div style="width:100%;height:500px">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin:auto;background:transparent;display:block;z-index:1;position:relative;width: 100%;" width="1707"
          height="916" preserveAspectRatio="xMidYMid" viewBox="0 200 1707 916">
          <g transform="translate(853.5,458) scale(1,1) translate(-853.5,-458)">
            <linearGradient id="lg-0.8881472016228629" x1="0" x2="1" y1="0" y2="0">
              <stop stop-color="#ff00ff" offset="0"></stop>
              <stop stop-color="#00ffff" offset="1"></stop>
            </linearGradient>
            <path d="" fill="url(#lg-0.8881472016228629)" opacity="0.4">
              <animate attributeName="d" dur="10s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="0s"
                values="M0 0L 0 909.3455832309247Q 170.7 687.5998209092286  341.4 659.7698302427228T 682.8 621.1644243325488T 1024.2 505.14820204011556T 1365.6 440.7431882837356T 1707 424.46473111617854L 1707 0 Z;M0 0L 0 798.081517748247Q 170.7 845.9596537763715  341.4 811.3952898976238T 682.8 715.5166301983494T 1024.2 507.6815107593496T 1365.6 439.3952115846249T 1707 386.2549084065619L 1707 0 Z;M0 0L 0 771.4066312493172Q 170.7 822.2182287549535  341.4 789.2514488304554T 682.8 651.2668104027259T 1024.2 468.7004557165409T 1365.6 507.09784622642024T 1707 416.7013389695441L 1707 0 Z;M0 0L 0 909.3455832309247Q 170.7 687.5998209092286  341.4 659.7698302427228T 682.8 621.1644243325488T 1024.2 505.14820204011556T 1365.6 440.7431882837356T 1707 424.46473111617854L 1707 0 Z">
              </animate>
            </path>
            <path d="" fill="url(#lg-0.8881472016228629)" opacity="0.4">
              <animate attributeName="d" dur="10s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-2s"
                values="M0 0L 0 884.2687208112081Q 170.7 834.8040546701588  341.4 808.4539622937782T 682.8 576.1156617631423T 1024.2 514.1090722489212T 1365.6 548.5664846781552T 1707 362.0068410674247L 1707 0 Z;M0 0L 0 862.9644361555585Q 170.7 730.1895221541484  341.4 687.0787106206188T 682.8 635.9587230267878T 1024.2 575.0098956611647T 1365.6 499.36976763836776T 1707 294.5631544121291L 1707 0 Z;M0 0L 0 876.8784544521961Q 170.7 774.6494087866106  341.4 750.2886841574489T 682.8 665.7818232015181T 1024.2 521.4997716127369T 1365.6 590.7059720346659T 1707 512.006146418777L 1707 0 Z;M0 0L 0 884.2687208112081Q 170.7 834.8040546701588  341.4 808.4539622937782T 682.8 576.1156617631423T 1024.2 514.1090722489212T 1365.6 548.5664846781552T 1707 362.0068410674247L 1707 0 Z">
              </animate>
            </path>
            <path d="" fill="url(#lg-0.8881472016228629)" opacity="0.4">
              <animate attributeName="d" dur="10s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-4s"
                values="M0 0L 0 798.9896353128969Q 170.7 776.3662973736929  341.4 752.7358812793875T 682.8 675.04993897455T 1024.2 601.751479893851T 1365.6 519.9764936959948T 1707 361.8857695794507L 1707 0 Z;M0 0L 0 820.7304080371928Q 170.7 691.7438152957069  341.4 676.8985322222525T 682.8 730.1565523748435T 1024.2 512.7754954080604T 1365.6 558.9908098275164T 1707 420.6981874703261L 1707 0 Z;M0 0L 0 842.7519592229353Q 170.7 870.8166226944372  341.4 835.1778805139423T 682.8 688.4195720389112T 1024.2 591.4486679891934T 1365.6 494.8629613490317T 1707 401.7808039211329L 1707 0 Z;M0 0L 0 798.9896353128969Q 170.7 776.3662973736929  341.4 752.7358812793875T 682.8 675.04993897455T 1024.2 601.751479893851T 1365.6 519.9764936959948T 1707 361.8857695794507L 1707 0 Z">
              </animate>
            </path>
            <path d="" fill="url(#lg-0.8881472016228629)" opacity="0.4">
              <animate attributeName="d" dur="10s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-6s"
                values="M0 0L 0 859.0103397493322Q 170.7 767.1719901238896  341.4 726.7978581589442T 682.8 729.3630108190227T 1024.2 575.9702219835401T 1365.6 548.0278665324364T 1707 411.2516973923255L 1707 0 Z;M0 0L 0 898.9187202309002Q 170.7 767.6516888273567  341.4 731.5771312828899T 682.8 607.6335694891949T 1024.2 500.6632988622695T 1365.6 419.61787625682894T 1707 358.1615583306417L 1707 0 Z;M0 0L 0 843.9441736262895Q 170.7 768.6594644143067  341.4 751.3989242953885T 682.8 659.3912153781991T 1024.2 632.0522021908951T 1365.6 576.5190192716617T 1707 447.40548662378364L 1707 0 Z;M0 0L 0 859.0103397493322Q 170.7 767.1719901238896  341.4 726.7978581589442T 682.8 729.3630108190227T 1024.2 575.9702219835401T 1365.6 548.0278665324364T 1707 411.2516973923255L 1707 0 Z">
              </animate>
            </path>
            <path d="" fill="url(#lg-0.8881472016228629)" opacity="0.4">
              <animate attributeName="d" dur="10s" repeatCount="indefinite" keyTimes="0;0.333;0.667;1" calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" begin="-8s"
                values="M0 0L 0 848.4864558153959Q 170.7 697.1657480401329  341.4 679.5111399065438T 682.8 654.9815860704132T 1024.2 636.1583328409678T 1365.6 444.823032148942T 1707 454.02174675595137L 1707 0 Z;M0 0L 0 889.6809789240187Q 170.7 817.7446338232241  341.4 770.7463974117751T 682.8 649.208954751913T 1024.2 480.7021783000064T 1365.6 409.39066541870017T 1707 436.05458118918506L 1707 0 Z;M0 0L 0 867.4400711052954Q 170.7 759.3153782179747  341.4 716.09924729913T 682.8 620.1042593162003T 1024.2 637.9096186185171T 1365.6 505.04371747802594T 1707 459.8586301626967L 1707 0 Z;M0 0L 0 848.4864558153959Q 170.7 697.1657480401329  341.4 679.5111399065438T 682.8 654.9815860704132T 1024.2 636.1583328409678T 1365.6 444.823032148942T 1707 454.02174675595137L 1707 0 Z">
              </animate>
            </path>
          </g>
        </svg>
      </div> -->
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                <!-- Sidebar content here -->
                <li><a>首页</a></li>
                <li><a>分类</a></li>
                <li><a>标签云</a></li>
                <li><a>关于</a></li>
                <li><a>后台管理</a></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { themeChange } from "theme-change";
let colorName = ref('light');
const colorList = [
    "emerald",
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "corporate",
    "halloween",
    "lofi",
    "wireframe",
    "black",
    "dracula",
    "cmyk",
];
onMounted(() => {
    themeChange(false);
});
const changeme = (color) => {
    colorName.value = color
};
</script>

<style lang="scss" scoped>

</style>
