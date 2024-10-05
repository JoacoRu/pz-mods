const types = {
  vehicle: 'vehicle',
  character: 'character',
  qualityOfLife: 'qualityOfLife',
  configuration: 'configuration', 
  weapons: 'weapons',
  craft: 'craft',
  cloth: 'cloth'
}

const mods = [
  {
    name: 'Rv interior',
    type: types[3],
    workshop_id: '2822286426',
    mod_id: 'RV_Interior_MP',
    map_id: 'vehicle_interior'
  },
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
    name: 'Tsars Common Library 2.0 cache true music mp',
    type: types[3],
    workshop_id: '2688809268',
    mod_id: 'TsarcraftCache2',
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
    name: 'Gun Fighter',
    type: types[2],
    workshop_id: '2297098490',
    mod_id: 'Arsenal(26)GunFighter[MAIN MOD 2.0]',
  },
  {
    name: 'Brita weapon pack',
    type: types[3],
    workshop_id: '2200148440',
    mod_id: 'Brita',
  },
  {
    name: 'Brita armor pack',
    type: types[3],
    workshop_id: '2460154811',
    mod_id: 'Brita_2',
  },
  {
    name: 'The Workshop',
    type: types[3],
    workshop_id: '2680473910',
    mod_id: 'TheWorkshop(new version)',
  },
  {
    name: 'RavenCreek',
    type: types[2],
    workshop_id: '2196102849',
    mod_id: 'RavenCreek',
    map_id: 'RavenCreek'
  },
  {
    name: 'Simple Status',
    type: types.qualityOfLife,
    workshop_id: '2867431511',
    mod_id: 'simpleStatus',
  },
  {
    name: 'True Actions',
    type: types.qualityOfLife,
    workshop_id: '2648779556',
    mod_id: 'TrueActionsDancing',
  },
  {
    name: 'True Music',
    type: types.qualityOfLife,
    workshop_id: '2613146550',
    mod_id: 'truemusic',
  },
  {
    name: 'True Music Gatulio',
    type: types.qualityOfLife,
    workshop_id: '3031991573',
    mod_id: 'gatulio_arg_playlist',
  },
  {
    name: 'Has Been Read Books',
    type: types.qualityOfLife,
    workshop_id: '2544353492',
    mod_id: 'P4HasBeenRead',
  },
  {
    name: 'Sentido Comun',
    type: types.qualityOfLife,
    workshop_id: '2875848298',
    mod_id: 'BB_CommonSense',
  },
  {
    name: 'Repair any Clothe',
    type: types.qualityOfLife,
    workshop_id: '2142622992',
    mod_id: 'RepairAnyClothes',
  },
  {
    name: 'Combat Text',
    type: types.qualityOfLife,
    workshop_id: '2286124931',
    mod_id: 'CombatText',
  },
  {
    name: 'They Knew (La cura xd)',
    type: types.qualityOfLife,
    workshop_id: '2725378876',
    mod_id: 'TheyKnew',
  },
  {
    name: 'Noir Attachments',
    type: types.craft,
    workshop_id: '2754567348',
    mod_id: 'nattachments',
  },
  {
    name: 'Poncho',
    type: types.cloth,
    workshop_id: '2629286881',
    mod_id: 'MilPoncho',
  },
  {
    name: 'Canteen and bottles',
    type: types.qualityOfLife,
    workshop_id: '2863949128',
    mod_id: 'CanteensAndBottles',
  },
  {
    name: 'Simple UI Library',
    type: types.configuration,
    workshop_id: '2760035814',
    mod_id: 'UIAPI',
  },
  {
    name: 'The Only Cure (Amputation)',
    type: types.character,
    workshop_id: '2703664356',
    mod_id: 'Amputation',
  },
  {
    name: 'Rename Containers',
    type: types.qualityOfLife,
    workshop_id: '2880687295',
    mod_id: 'RenameContainers',
  },
  {
    name: 'Spears Trap',
    type: types.craft,
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
    type: types.qualityOfLife,
    workshop_id: '2857762294',
    mod_id: 'SmokingSoundsOverhaul',
  },
  {
    name: 'Braven Utilities',
    type: types[2],
    workshop_id: '2850135071',
    mod_id: 'BB_Utils',
  },
  {
    name: 'jiggas Green Fire (Build 40 & Build 41+ MP/Solo)',
    type: types.craft,
    workshop_id: '1703604612',
    mod_id: 'jiggasGreenfireMod;jiggasAddictionMod',
  },
  {
    name: 'Weapon Condition',
    type: types.qualityOfLife,
    workshop_id: '2619072426',
    mod_id: 'TheStar',
  },
  {
    name: 'Steam Powered Generator',
    type: types.craft,
    workshop_id: '2762648316',
    mod_id: 'SteamPoweredGenerator',
  },
  {
    name: 'Descripción clara de Moodles',
    type: types.qualityOfLife,
    workshop_id: '2763647806',
    mod_id: 'MoreCLR_desc4mood',
  },
  {
    name: 'Reduce Weigth wood 70%',
    type: types.qualityOfLife,
    workshop_id: '2671262464',
    mod_id: 'ReducedWoodWeight75p41',
  },
  {
    name: '90 Zanella 50cc Delivery Scooter',
    type: types.vehicle,
    workshop_id: '2922441474',
    mod_id: '90zanella50cc',
  },
  {
    name: '83 AM General M923',
    type: types.vehicle,
    workshop_id: '2811383142',
    mod_id: '83amgeneralM923',
    vehicle_id: ['83amgeneralM923']
  },
  {
    name: '87 TOYOTA Land Cruiser FJ60',
    type: types.vehicle,
    workshop_id: '2489148104',
    mod_id: '87cruiser',
  },
  {
    name: '82 Jeep J10',
    type: types.vehicle,
    workshop_id: '2886832257',
    mod_id: '82jeepJ10',
  },
  {
    name: '69 Chevrolet Camaro',
    type: types.vehicle,
    workshop_id: '2991201484',
    mod_id: '69camaro',
  },
  {
    name: '28 Brough Superior SS100',
    type: types.vehicle,
    workshop_id: '2913634132',
    mod_id: '28ss100',
  },
  {
    name: '80 Kawasaki Kz1000 Police',
    type: types.vehicle,
    workshop_id: '2818847163',
    mod_id: '80kz1000',
  },
  {
    name: 'Fiat Fiorino 1992',
    type: types.vehicle,
    workshop_id: '2989871420',
    mod_id: '1992fiorino',
  },
  {
    name: 'Humvee + trailer',
    vehicle_id: ['92amgeneralM998', 'TrailerM101A3cargo'],
    type: types.vehicle,
    workshop_id: '2642541073',
    mod_id: '92amgeneralM998',
  },
  {
    name: 'More loot settings',
    type: types.configuration,
    workshop_id: '2812491628',
    mod_id: 'MoreLootSettings',
  },
  {
    name: 'Bicycles',
    type: types.vehicle,
    workshop_id: '2988491347',
    vehicle_id: ['Base.BicycleRegular', 'Base.BicycleRegularScrap', 'Base.BicycleMTB', 'Base.BicycleMTBScrap', 'TrailerM101A3cargo'],
    mod_id: 'BB_Bicycles',
  },
  {
    name: 'Land rover',
    type: types.vehicle,
    workshop_id: '2761836419',
    mod_id: 'lrdisco1',
  },
  {
    name: '86 Volvo B10M Bus',
    type: types.vehicle,
    workshop_id: '3090364432',
    mod_id: 'CytVolvoBus86;CytVolvoBus86Crash',
  },
  {
    name: '91 RANGE ROVER Classic',
    type: types.vehicle,
    workshop_id: '2409333430',
    vehicle_id: ['91range', '91range2'],
    mod_id: '91range',
  },
  {
    name: '92 NISSAN Skyline GT-R (R32)',
    type: types.vehicle,
    workshop_id: '2846036306',
    vehicle_id: ['92nissanGTR', '92nissanGTRlhd'],
    mod_id: '92nissanGTR',
  },
  {
    name: '89 Isuzu Trooper',
    type: types[0],
    workshop_id: '2932549988',
    vehicle_id: ['89trooper','89trooperOP', '89trooperRS'],
    mod_id: '89trooper',
  },
  {
    name: '28 Brough Superior SS100',
    type: types.vehicle,
    workshop_id: '2932549988',
    vehicle_id: ['28ss100', '28ss100hermes'],
    mod_id: '28ss100',
  },
  {
    name: '63 Volkswagen Type 2 Van',
    type: types.vehicle,
    workshop_id: '3041122351',
    vehicle_id: ['63Type2Van', '63Type2VanMilitary', '63Type2VanHippie', '63Type2VanApocalypse'],
    mod_id: '63Type2Van',
  },
  {
    name: 'UH 60 Helicopter SP/MP I V 2.0',
    type: types.vehicle,
    workshop_id: '2955370240',
    vehicle_id: ['UHelicopter'],
    mod_id: 'UH60Helicopter',
  },
  {
    name: '93 Ford F-Series',
    type: types.vehicle,
    workshop_id: '3073430075',
    vehicle_id: ['93fordF150', '93fordF350fd', '93fordF350pd', '93fordF350dually', '93fordF350', '93fordF250'],
    mod_id: '93fordF350',
  },
  {
    name: 'Destroyable World Fences',
    type: types[3],
    workshop_id: '2923027740',
    mod_id: 'DWF',
  },
  {
    name: 'Over the River',
    type: types[0],
    workshop_id: '926737806',
    mod_id: 'Otr',
    map_id: 'Otr',
  },
  {
    name: 'Fiat 600 1970 (Seat 600 / Zastava 750)',
    type: types[0],
    workshop_id: '3036531689',
    mod_id: '1970fiat600',
  },
  {
    name: 'Building Menu [B41.78]',
    type: types[0],
    workshop_id: '3067798182',
    mod_id: 'BuildingMenu',
  },
  {
    name: 'Dylans Tile Pack',
    type: types[0],
    workshop_id: '2599752664',
    mod_id: 'DylansTiles',
  },
  {
    name: 'WeBuildZ: Barricade',
    type: types[0],
    workshop_id: '2790397567',
    mod_id: 'Barricades41',
  },
  {
    name: 'Visible Holster',
    type: types[0],
    workshop_id: '2901552077',
    mod_id: 'mrnvsbhltr',
  },
  {
    name: 'Autotsar Tuning Atelier - Bus TUNING 2.0',
    type: types[0],
    workshop_id: '2592358528',
    mod_id: 'ATA_Bus',
  },
  {
    name: 'ahz clothing',
    type: types.cloth,
    workshop_id: '2908013174',
    mod_id: 'ahzclothing',
  },
  {
    name: 'Pocket Kittens',
    type: types.qualityOfLife,
    workshop_id: '2883925239',
    mod_id: 'PocketKittens;PocketKittensPsycho',
  },
  {
    name: '¡Argentina essentials!',
    type: types.craft,
    workshop_id: '2841867787',
    mod_id: 'ArgEss_B',
  },
  {
    name: 'Gunslingers Redemption (Refreshed Version)',
    type: types.craft,
    workshop_id: '3078291265',
    mod_id: 'GRGV',
  },
  {
    name: 'Rick Grimes - Murder Jacket from The Walking Dead',
    type: types.cloth,
    workshop_id: '3185544130',
    mod_id: 'Rick Grimes - Murder Jacket (TWD)',
  },
  {
    name: 'Scrap Weapons!',
    type: types.craft,
    workshop_id: '2122265954',
    mod_id: 'ScrapWeapons(new version)',
  },
  {
    name: 'Better Towing (Work in SP/MP 41.71+)',
    type: types[0],
    workshop_id: '2241990680',
    mod_id: 'TowingCar',
  },
  {
    name: 'Autotsar Tuning Atelier - Jaap Wrungel [TUNING 2.0]',
    type: types[0],
    workshop_id: '2636100523',
    mod_id: 'ATA_Jeep;ATA_Jeep_x10;ATA_Jeep_x2;ATA_Jeep_x4',
  },
  {
    name: 'Vehicle Repair Overhaul',
    type: types.weapons,
    workshop_id: '2757712197',
    mod_id: 'VehicleRepairOverhaul',
  },
  {
    name: 'Read While Walking',
    type: types.qualityOfLife,
    workshop_id: '2845952197',
    mod_id: 'SimpleReadWhileWalking41',
  },
  {
    name: 'Lifestyle: Hobbies',
    type: types.character,
    workshop_id: '2997342681',
    mod_id: 'Lifestyle',
  },
  {
    name: 'Ammo Maker',
    type: types.craft,
    workshop_id: '2788256295',
    mod_id: 'ammomaker',
  },
  {
    name: 'Push From Ground',
    type: types.qualityOfLife,
    workshop_id: '2761983906',
    mod_id: 'PushFromGround',
  },
  {
    name: 'Proximity Inventory',
    type: types.qualityOfLife,
    workshop_id: '2847184718',
    mod_id: 'ProximityInventory',
  },
  {
    name: 'Bandits NPC',
    type: types.character,
    workshop_id: '3268487204',
    mod_id: 'Bandits',
  },
  {
    name: 'Functional Chainsaw',
    type: types.weapons,
    workshop_id: '2921981763',
    mod_id: 'FunctionalChainsaw',
  },
  {
    name: 'Horde Night',
    type: types.weapons,
    workshop_id: '2714850307',
    mod_id: 'HordeNight01',
  },
  {
    name: 'HydroCraft b41 Continued',
    type: types.craft,
    workshop_id: '2778991696',
    mod_id: 'Hydrocraft',
  },
  {
    name: 'Random Zombies',
    type: types.configuration,
    workshop_id: '2818577583',
    mod_id: 'BLTRandomZombies',
  },
  {
    name: 'Tow Truck',
    type: types.vehicle,
    workshop_id: '2884859083',
    mod_id: 'STowTruck;STowTruck_M62Patch;STowTruck_SVUPatch;STowTruck_Vanilla',
  },
  {
    name: 'Filibuster Rhymes Used Cars!',
    type: types.vehicle,
    workshop_id: '1510950729',
    mod_id: 'FRUsedCars;FRUsedCarsFT;FRUsedCarsNLF;FRUsedCarsNRN',
  },
  {
    name: 'Walter Whites Van (Filibuster Rhymes Used Cars!)',
    type: types.vehicle,
    workshop_id: '2706332245',
    mod_id: 'WalterWhitesRV',
  },
  {
    name: 'Sprinter Trueno AE86',
    type: types.vehicle,
    workshop_id: '2781895054',
    mod_id: 'SprinterAE86',
  },
  {
    name: 'Mazda MX-5 Miata',
    type: types.vehicle,
    workshop_id: '2749103052',
    mod_id: 'MazdaMiatafhq;MiataNoWinkSpawn',
  },
  {
    name: 'Toyota Supra Mk. IV',
    type: types.vehicle,
    workshop_id: '2742154419',
    mod_id: 'SupraMkIVfhq',
  },
];

const map_id_template = (current, previus) => {
  if (!current.map_id) {
    return previus.map_id
  }

  return (previus.map_id?.length) ? previus.map_id + `;${current.map_id}` : current?.map_id
}

const vehicleIdTemplate = (vehicleId) => {
  if (!vehicleId?.length) return [];
  console.log(vehicleId)
  return vehicleId
}

const splitModId = (modId) => console.log(modId);

const getParsedMods = (mods) => {
    const parsedMods = mods.reduce((previus, current) => {
    const { workshop_id, mod_id, vehicle_id } = previus;
    const map_id = map_id_template(current, previus);

    return {
      workshop_id: [...previus.workshop_id, current.workshop_id] ,
      mod_id: [...previus.mod_id, current.mod_id],
      map_id: [...previus.map_id, current.map_id],
      vehicle_id: [...previus.vehicle_id, ...vehicleIdTemplate(current.vehicle_id)]
    }
  }, { mod_id: [], workshop_id: [], map_id: [], vehicle_id: [] });
  const workshop = parsedMods.workshop_id.join(';');
  const modId = parsedMods.mod_id.join(';');
  console.log(parsedMods.vehicle_id)
  const vehicleId = parsedMods.vehicle_id.join(';');
  console.log('workshop', workshop)
  console.log('', parsedMods.workshop_id.length, parsedMods.mod_id.length)
  console.log('modId', modId)
  console.log('vehicleId', vehicleId)
  
}


const getParsedName = (mods) => mods.map((mod) => mod.name);


const modsParsed = getParsedMods(mods);

const getFilteredNames = (id) => {
  const modsParsed = mods.filter((mod) => mod.type != id);
  return modsParsed.map((mod) => mod.name);
}


