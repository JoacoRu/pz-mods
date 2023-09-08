const types = ['vehicle', 'character', 'qualityOfLife', 'configuration', 'weapons']

const mods = [
    {
        name: 'Autotsar Motorclub',
        type: types[3],
        workshop_id: '2778576730',
        mod_id: 'amclub',
    },
    {
        name: 'Tsars Common Library 2.0',
        type: types[3],
        workshop_id: '2392709985',
        mod_id: 'tsarslib',
    },
    {
        name: 'Mod checker',
        type: types[3],
        workshop_id: '2937651968',
        mod_id: 'Mod_Checkers',
    },
    {
        name: 'Equipment UI',
        type: types[2],
        workshop_id: '2950902979',
        mod_id: 'EQUIPMENT_UI',
    },
    {
        name: 'Mod options',
        type: types[2],
        workshop_id: '2169435993',
        mod_id: 'modoptions',
    },
    {
        name: 'Snake',
        type: types[3],
        workshop_id: '2719327441',
        mod_id: 'AliceSPack;AmmoMaker;Barco Abandonado;BatesMetalicosRevived;CustomMapBridge;Factory;FuelTanksMod;LeGourmetRevolution;LootZetaEnhancedEdition;MilitaryComplex;RPropaneTank;Riverside Gunstore;SkillsMag;SnakeUtilsPack;SnakeClothingMod;SnakeMansion;TableSaw;TallerMecanico;WPA',
        map_id: 'BarcoAbandonado;Factory;MilitaryComplex;Riverside Gunstore;Mansion;mechanicsplaces;tluisville;tmarch;tvalley'
    },
    {
        name: 'RavenCreek',
        type: types[2],
        workshop_id: '2196102849',
        mod_id: 'RavenCreek',
        map_id: 'RavenCreek'
    },
    {
        name: 'Minimal Display Bars',
        type: types[2],
        workshop_id: '2004998206',
        mod_id: 'MinimalDisplayBars',
    },
    {
        name: 'True Actions',
        type: types[1],
        workshop_id: '2648779556',
        mod_id: 'TrueActionsDancing',
    },
    {
        name: 'True Music',
        type: types[3],
        workshop_id: '2613146550',
        mod_id: 'truemusic',
    },
    {
        name: 'Has Been Read Books',
        type: types[2],
        workshop_id: '2544353492',
        mod_id: 'P4HasBeenRead',
    },
    {
        name: 'Sentido Comun',
        type: types[0],
        workshop_id: '2875848298',
        mod_id: 'BB_CommonSense',
    },
    {
        name: 'Repair any Clothe',
        type: types[2],
        workshop_id: '2142622992',
        mod_id: 'RepairAnyClothes',
    },
    {
        name: 'Combat Text',
        type: types[2],
        workshop_id: '2286124931',
        mod_id: 'CombatText',
    },
    {
        name: 'They Knew (La cura xd)',
        type: types[2],
        workshop_id: '2725378876',
        mod_id: 'TheyKnew',
    },
    {
        name: 'Noir Attachments',
        type: types[2],
        workshop_id: '2754567348',
        mod_id: 'nattachments',
    },
    {
        name: 'Poncho',
        type: types[2],
        workshop_id: '2629286881',
        mod_id: 'MilPoncho',
    },
    {
        name: 'Canteen and bottles',
        type: types[2],
        workshop_id: '2863949128',
        mod_id: 'CanteensAndBottles',
    },
    {
        name: 'Simple UI Library',
        type: types[3],
        workshop_id: '2760035814',
        mod_id: 'UIAPI',
    },
    {
        name: 'The Only Cure (Amputation)',
        type: types[2],
        workshop_id: '2703664356',
        mod_id: 'Amputation',
    },
    {
        name: 'Rename Containers',
        type: types[2],
        workshop_id: '2880687295',
        mod_id: 'RenameContainers',
    },
    {
        name: 'Spears Trap',
        type: types[2],
        workshop_id: '2640351732',
        mod_id: 'SpearTraps',
    },
    {
        name: 'You drive, I sleep',
        type: types[2],
        workshop_id: '2830570280',
        mod_id: 'YouDriveISleep',
    },
    {
        name: '50% metal weight',
        type: types[2],
        workshop_id: '2829657632',
        mod_id: '50%metalweight',
    },
    {
        name: 'DIY Engine Parts!',
        type: types[0],
        workshop_id: '2770498315',
        mod_id: 'DIY_EngineParts',
    },
    {
        name: 'Riding Mower (Cortadora de pasto)',
        type: types[0],
        workshop_id: '2771297715',
        mod_id: 'RidingMower',
    },
    {
        name: 'DIY VEHICLES PARTS!',
        type: types[2],
        workshop_id: '2795814840',
        mod_id: 'DIY_VehicleParts!;DIY_VehicleParts!_GlassWindow',
    },
    {
        name: 'Plain Moodles',
        type: types[2],
        workshop_id: '3008416736',
        mod_id: 'BION_PlainMoodles',
    },
    {
        name: 'Skyler DrugMod [Build 41+]',
        type: types[2],
        workshop_id: '2900366269',
        mod_id: 'DrugMod',
    },
    {
        name: 'Smoker',
        type: types[2],
        workshop_id: '2026976958',
        mod_id: 'Smoker',
    },
    {
        name: 'Smoking Sounds Overhaul',
        type: types[2],
        workshop_id: '2857762294',
        mod_id: 'SmokingSoundsOverhaul',
    },
    {
        name: 'jiggas Green Fire (Build 40 & Build 41+ MP/Solo)',
        type: types[2],
        workshop_id: '1703604612',
        mod_id: 'jiggasGreenfireMod;jiggasAddictionMod',
    },
    {
        name: 'Weapon Condition',
        type: types[2],
        workshop_id: '2619072426',
        mod_id: 'TheStar',
    },
    {
        name: 'Reduce Weigth wood 70%',
        type: types[2],
        workshop_id: '2671262464',
        mod_id: 'ReducedWoodWeight75p41',
    },
    {
        name: '90 Zanella 50cc Delivery Scooter',
        type: types[1],
        workshop_id: '2922441474',
        mod_id: '90zanella50cc',
    },
    {
        name: '83 AM General M923',
        type: types[0],
        workshop_id: '2811383142',
        mod_id: '83amgeneralM923',
        vehicle_id: '83amgeneralM923'
    },
    {
        name: '87 TOYOTA Land Cruiser FJ60',
        type: types[0],
        workshop_id: '2489148104',
        mod_id: '87cruiser',
    },
    {
        name: '82 Jeep J10',
        type: types[0],
        workshop_id: '2886832257',
        mod_id: '82jeepJ10',
    },
    {
        name: '69 Chevrolet Camaro',
        type: types[0],
        workshop_id: '2991201484',
        mod_id: '69camaro',
    },
    {
        name: '28 Brough Superior SS100',
        type: types[0],
        workshop_id: '2913634132',
        mod_id: '28ss100',
    },
    {
        name: '80 Kawasaki Kz1000 Police',
        type: types[0],
        workshop_id: '2818847163',
        mod_id: '80kz1000',
    },
    {
        name: 'Fiat Fiorino 1992',
        type: types[0],
        workshop_id: '2989871420',
        mod_id: '1992fiorino',
    },
    {
        name: 'Humvee + trailer',
        vehicle_id: ['92amgeneralM998', 'TrailerM101A3cargo'],
        type: types[0],
        workshop_id: '2642541073',
        mod_id: '92amgeneralM998',
    }
];

const getParsedMods = (mods) => mods.reduce((previus, current) => {
    const { workshop_id, mod_id, map_id } = previus;

    return {
        ...previus,
        workshop_id: workshop_id.length > 0 ? `${workshop_id};${current.workshop_id}` : current.workshop_id,
        mod_id: mod_id.length > 0 ? `${mod_id};${current.mod_id}` : current.mod_id,
    }
}, { mod_id: '', workshop_id: '', map_id: '' });

const getParsedName = (mods) => mods.map((mod) => mod.name);

const foo = getParsedMods(mods);
console.log(foo)