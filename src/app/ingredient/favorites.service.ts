import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FavoriteItem } from '../favorite/favorite.model';

@Injectable ({
    providedIn: 'root'
})
export class FavoriteService {

    private item = new BehaviorSubject<FavoriteItem[]>([
        
    ]);

    getFavorites(): FavoriteItem[] {
        return [
            {
                id: 'id18',
                title: 'Acne',
                image:'assets/images/acne.jpg',
                description: 'Acne is a skin condition common in adolescents and young adults. This is characterized by comedones which often become inflamed and form papules, pustules, modules and cysts which usually occur on the face, chest and back.',
                pic: 'a',
                plant: '1. Aloevera',
                def: 'Get one leaf and peel the outer covering. Rub the juice on the face every after washing with warm water. Leave it on for 30 minutes. You may leave it on the face overnight if you can tolerate it.',
                plant2: '2. Romero',
                def2: 'Crush 5 leaves and extract the juice. Apply the juice on face after washing it with warm water. Leave it on overnight.',
            },
            {
                id: 'id19',
                title: 'Allergy',
                image:'assets/images/allergy.jpg',
                description: 'A skin allergy is when skin becomes irritated because the immune system reacted to something that is usually harmless. This is called an allergic reaction. ',
                pic:'a',
                plant:'1. Kakawate',
                def: 'Crush or chop young leaves and extract juice. Apply the juice on the skin until the itchiness is relieved.',
                plant2: '2. Kalatsusi',
                def2: 'Extract the sap or juice from the leaves and trunk. Mix with coconut oil. Rub the mixture on the affected skin, 2 times a day.',
            },
            {
                id: 'id1',
                title: 'Asthma',
                image:'assets/images/asthma.jpg',
                description: 'Asthma is a disease of bronchial tubes or airways. Symptoms are a feeling of tightness in the chest, shortness of breath, wheezing and coughing.',
                pic: 'a',
                plant: '1. Talampunay',
                def: 'Roll 2 dried leaves. Use as cigarette every 6 hours.',
                plant2: '2. Sampalok',
                def2: 'Chop and boil a one foot long piece of bark in 3 glasses of water for 10 minutes. Drink 1 cup every after meal and at bedtime.',
            },
            {
                id: 'id2',
                title: 'Bee and Wasp Sting',
                image:'assets/images/bee.jpg',
                description: 'Bee and wasp stings could be very painful, the pain could last for several days.',
                pic: 'a',
                plant: '1. Kalamansi',
                def: 'Immediately rub the bitten area with vinegar or kalamansi juice until the pain subsides.',
                plant2:'',
                def2: '',
            },
            {
                id: 'id3',
                title: 'Bleeding Wound',
                image:'assets/images/bleeding wound.jpg',
                description: 'A wound is a cut or breaks in the skin and flesh resulting from injury.',
                pic: 'a',
                plant: '1. Young Saging Leaves',
                def: 'Pound young leaves until soft and juicy. Drop the juice over the wound. Apply with pressure the pounded leaves over the wound. Bandage snugly but not too tight. If bleeding does not stop after 15 minutes, bring the patient to the nearest hospital.',
                plant2: '2. Mayana leaves',
                def2: 'Wash the young leaves. Crush and extract the juice from the leaves. Drop a few drops of the juice directly on the wound. Apply the crushed leaves as poultice. Bandage snugly but not too tight.',
            },
            {
                id: 'id4',
                title: 'Burns',
                image:'assets/images/burns.jpg',
                description: ' A burn is an injury on the skin and flesh resulting from application of heat, radiation, friction and electricity.',
                pic: 'a',
                plant: '1. Aloevera',
                def: 'Wash leaves with soap and water. Pound the leaves and extract juice. Apply juice on the burn are after soaking in warm salt solution, once a day.',
                plant2: '2. Atsuete leaves',
                def2: 'Wash leaves with soap and water. Boil 10 leaves in 5 glasses of water. Let it cool. Soak the burn area for 10 minutes, once a day.',
            },
            {
                id: 'id5',
                title: 'Chicken Pox',
                image:'assets/images/chickenpox.jpg',
                description: 'Chicken pox is an acute contagious disease. It principally afflicts children and is caused by the varicella virus. It is characterized by a superficial eruption of transparent macular vasicles which appear in successive crops on different parts of the body.',
                pic: 'a',
                plant: '1. Balimbing',
                def: 'Crush or chop young leaves and extract the juice. Apply the juice on the skin or lesions to relieve itchiness, 3 times a day. Do not rub juice on the skin.',
                plant2: '2. Lagundi',
                def2: 'Boil 4 tablespoons of chopped dry leaves or 6 tablespoons of chopped fresh leaves in 2 glasses of water for 15 minutes. Drink 1 cup every 4 hours for adult, 1 tablespoon every 4 hours for babies, ¼ cup every 4 hours for 2-6 years old and ½ cu every 4 hours for 7-12 years old.',
            },
            {
                id: 'id6',
                title: 'Constipation',
                image:'assets/images/constipation.jpg',
                description: 'Constipation is a condition in which the bowels are evacuated at long intervals or with difficulty.',
                pic: 'a',
                plant: '1. Kangkong',
                def: 'Eat 2 cups of boiled leaves with meals. This may be a part of the menu or diet.',
                plant2: '2.  Malunggay ',
                def2: 'Eat 1 cup cooked leaves with meals.',
            },
            {
                id: 'id7',
                title: 'Cough',
                image:'assets/images/cough.jpg',
                description: 'Productive cough due to congestions and bronchitis.',
                pic: 'a',
                plant: '1. Lagundi',
                def: 'Boil 4 tablespoons of chopped dried leaves or 6 tablespoons of chopped fresh leaves in 2 glasses of water for 15 minutes. For adults drink 1 glass, 3 times a day, 2 tablespoons, 3 times a day for 2-6 years old and 1 cup for 7-12 years old, 3 times a day.',
                plant2: '2. Oregano',
                def2: 'Boil 1 cup of chopped fresh leaves in 2 glasses of water for 15 minutes. For adults drink ½ cup , 3 times a day, 2 tablespoons, 3 times a day for 2-6 years old and ¼ cup for 7-12 years old, 3 times a day.',
            },
            {
                id: 'id8',
                title: 'Dandruff',
                image:'assets/images/dandruff.jpg',
                description: 'Dandruffs are scales of greasy keratotic material shed from the scalp.',
                pic: 'a',
                plant: '1. Aloevera',
                def: 'Extract juice from fresh leaves. Apply juice liberally and massage scalp 1 hour before the gugo bark shampoo. Do this once a week for 4 weeks.',
                plant2: '2. Gugo bark shampoo',
                def2: 'Soak the gugo bark in a basin of cold water for 30 minutes before the shampoo. Squeeze the juice in the water and put the juice of 3 calamansi. Wet hair very well and use this as shampoo. Rinse well. Use a vinegar as conditioner if the water is hard.',
            },
            {
                id: 'id9',
                title: 'Diarrhea',
                image:'assets/images/diarrhea.jpg',
                description: 'Diarrhea is a common symptom of gastrointestinal disease, characterized by increased frequency and fluid consistency of the stool.',
                pic: 'a',
                plant: '1. Tanglad',
                def: 'Boil 10 leaves in 2 glasses of water for 10 minutes. Add 1 tablespoon sugar and one small piece crushed ginger. For adult drink 1 cup 3 times a day every loose bowel. For babies, 1 tbp, 3 times a day and every loose bowel movement. For 2-6 years old, ¼ cup 3 times a day and after every loose bowel movement. For 7-12 years old drink ½ cup 3 times a day and after every loose bowel movement. ',
                plant2: '2. Bayabas',
                def2: 'Boil 10 chopped leaves in 2 glasses of water for 15 minutes. For adults drink 1 cup 3 times a day and after every loose bowel movement. For babies 1 tbp 3 times a day and after every loose bowel movement. For 2-6 years old ¼ cup 3 times a day and after every loose bowel movement. For 7-12 years old drink ½ cup 3 times a day and after every loose bowel movement.',
            }, 
            {
                id: 'id10',
                title: 'Fever',
                image:'assets/images/fever.jpg',
                description: 'A fever occurs when there is an elevation of the body temperature.',
                pic: 'a',
                plant: '1. Balimbing leaves',
                def: 'Boil 2 cups of chopped leaves in ½ gallon of water for 10 minutes. Strain,. Cool for 2 hours. Use this in making a cold compress if ice water is not availbale.',
                plant2: '2. Lagundi',
                def2: 'Boil 4 tablespoons of chopped dried leaves or 6 tablespoons of fresh chopped leaves in 2 glasses of water for 15 minutes.  For adults drink 1 cup for every 4 hours. For babies drink 1 tbp, every 4 hours and for 7-12 years old, drink ½ cup for every 4 hours.',
            },
            {
                id: 'id11',
                title: 'Headache',
                image:'assets/images/headache.jpg',
                description: 'Sinusitis is the inflammation of any of the paranasal sinuses, as the frontal, maxillary, or ethmoidal sinuses.',
                pic: 'a',
                plant: '1. Mansanilya leaves',
                def: 'Crush 5 fresh leaves and drop 2 drops of coconut oil on them. Heat the leaves directly over the fire without burning them. While still hot, apply directly over the forehead for the frontal sinusitis and over the cheeks near the nose for the maxillary sinusitis. Apply in the evening at bedtime for 30 minutes.',
                plant2: '2. Sambong leaves',
                def2: 'Crush 5 leaves and heat directly over open fire, one at a time. Apply directly while still hot aver the cheeks for maxillary sinusitis. Replace the cool leaf with a newly heates one till all 5 leaves are used up. Do this 2 times a day.',
            },
            {
                id: 'id12',
                title: 'Hyperacidity',
                image:'assets/images/hyperacidity.jpg',
                description: 'Hyperacidity is the excessive secretion of acid in the stomach which may be due to tension, starvation and other causes.',
                pic: 'a',
                plant: 'Carrot and Cabbage',
                def: 'Wash and slice in small pieces one big carrot and ¼ kilo cabbage. Osterize the carrots and cabbage with 2 glasses of water. Strain and add 1 tablespoon sugar. Sugar is optional. Keep in refrigerator to cool. Prepare for one day’s supply only.',
                plant2: '',
                def2: '',
            },
            {
                id: 'id13',
                title: 'Indigestion',
                image:'assets/images/indigestion.jpg',
                description: 'Indigestion is the disturbance in the digestive function of the stomach or its failure to digest food.',
                pic: 'a',
                plant: '1. Papaya',
                def: 'Eat as a fruit dessert, especially with heavy meals. Papaya helps in the digestion of protein.',
                plant2: '2. Anonas',
                def2: 'Warm the leaves in open fire. Apply the leaves directly on the stomach while still warm. Use abdominal binder. Renew every 2 hours. Good for children and babies.',
            },
            {
                id: 'id14',
                title: 'Measles',
                image:'assets/images/measles.jpg',
                description: 'Measles is an acute viral infection characterized by morbilliform eruptions with catarrhal inflammation of the conjunctiva and the air passages.',
                pic: 'a',
                plant: '1. Lagundi leaves for fever',
                def: 'Boil 4 tablespoons of chopped dried leaves or 6 tablespoons of fresh chopped leaves in 2 glasses of water for 15 minutes.  For adults drink 1 cup for every 4 hours. For babies drink 1 tbp, every 4 hours and for 7-12 years old, drink ½ cup for every 4 hours.',
                plant2: '2. Kamoteng Kahoy flour for starch bath',
                def2: 'Remove peelings and grate the tuber. Extract the juice, add water enough for one baby bath tub and boil. Soak the baby in the starchy water for 10-15 minutes but do not rub the skin. May apply directly as powder on the skin.',
            },
            {
                id: 'id15',
                title: 'Mosquito Bites',
                image:'assets/images/mosquitobites.jpg',
                description: 'Infected mosquito bites become swollen and painful.',
                pic: 'a',
                plant: '1. Kataka-taka',
                def: 'Pound 5-10 leaves and extract the juice. Apply the juice directly on the infected bites, 3 times a day.',
                plant2: '2. Atis',
                def2: 'Pound and extract the juice from one unripe fruit. Apply the juice directly on the infected bites. 3 times a day.',
            },
            {
                id: 'id16',
                title: 'Sorethroat',
                image:'assets/images/sorethroat.jpg',
                description: 'A sore throat is a congestion or inflammation in the throat  due to tonsillitis, pharyngitis or laryngitis.',
                pic: 'a',
                plant: '1. Luya or ginger',
                def: 'Wash and peel a small piece of ginger. Chew slowly for a few minutes. Swallow the juice. Or, keep small piece in the mouth, chewing it little by little.',
                plant2: '2. Bawang',
                def2: 'Wash one piece and peel. Keep in the mouth for some time, chewing it slow. Swallow juice',
            },
            {
                id: 'id20',
                title: 'Swollen Gums',
                image:'assets/images/mouth.jpg',
                description: 'Swollen gums or stomatitis is an inflammation of the soft tissues of the mouth.',
                pic: 'a',
                plant: '1. Bayabas',
                def: ' Boil one cup of chopped fresh leaves in 2 glasses of water for 10 minutes. Strain and cool. Use the decoction for hot salt gargle or mouthwash every after meals.',
                plant2: '2. Kaymito',
                def2: 'Boil 1 cup of chopped fresh leaves in 2 glasses of water for 10 minutes. Use the decoctin for mouthwash or gargle.',
            },
            {
                id: 'id17',
                title: 'Toothache',
                image:'assets/images/toothache.jpg',
                description: 'A toothache is any pain in or about a tooth.',
                pic: 'a',
                plant: '1. Abukado',
                def: 'Slice a small piece that will fit into the cavity. Place as filling inside the activity. Renew fillings 2 times a day.',
                plant2: '',
                def2: '',
            }
        ];
    }
    
    getFavoriteItem(id: string): FavoriteItem {
        return this.getFavorites().find((favoriteItem) => favoriteItem.id == id);
    }

    constructor(
       
        ) { }

    getFavorite() {
        return this.item.asObservable();
    }
    
    addToFavorite(newItem: FavoriteItem) {
        this.item.next([...this.item.getValue(), newItem]);
    }

    removeFavorite(id: string) {
        this.item.next(this.item.getValue().filter((favoriteItem) => favoriteItem.id !== id));
    }
}