/**
*Created by atm on 17/4/15.
*/
function generateNick(adjCount, nameType, charCount, adjectiveList, nameList){
    adjCount=typeof adjCount !== 'undefined' ? adjCount : 2;
    charCount=typeof charCount !== 'undefined' ? charCount : 24;
    function title(name){
        return name.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    function slug(name) {
        return name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }
    function create_nickname(){
        var element_id = (new Date().getTime()*20)%444366429;
//    var name_id = Math.ceil(element_id % 1600)+(75*Math.random());
        var name_id = Math.ceil(element_id % 1600);
        var adj_list = [];
        for (var i=0; i<adjCount; i++){
//        adj_list.push([Math.ceil((element_id % 500)+25*Math.random())]);
            adj_list.push([Math.ceil((element_id % 275)+250*Math.random())]);
        }
        var unique_name="";
        adj_list.forEach(function(adj_id) {
            unique_name+=adjectiveList[adj_id]+" ";
        });
        unique_name+=nameList[name_id];
        return unique_name;
    }
    if (typeof adjectiveList == 'undefined') {
        var adjectiveList = ['agreeable', 'amazed', 'amazing', 'animated', 'appreciative', 'attracted', 'attractive', 'awesome', 'beautiful', 'believing', 'better', 'blithesome', 'bold', 'brave', 'calm', 'cheerful', 'clean', 'clever', 'delightful', 'devoted', 'eager', 'empowered', 'engrossed', 'enlightened', 'excellent', 'excited', 'fabulous', 'faith', 'fantastic', 'favorable', 'festive', 'fortuitous', 'fortunate', 'free', 'fresh', 'gentle', 'gorgeous', 'great', 'handsome', 'happy', 'hope', 'incredible', 'ineffable', 'intelligent', 'intent', 'involved', 'jolly', 'joyful', 'kind', 'liking', 'loving', 'lucky', 'lusting', 'mirthful', 'moody', 'nice', 'open', 'optimistic', 'outstanding', 'overcome', 'overjoyed', 'perfect', 'playful', 'pride', 'propitious', 'proud', 'reliable', 'relieved', 'remarkable', 'respectful', 'serene', 'smart', 'spectacular', 'splendid', 'stellar', 'strong', 'stupendous', 'super', 'supportive', 'sweet', 'sympathetic', 'thrilled', 'ultimate', 'unbelievable', 'understanding', 'well', 'wonderful', 'wondrous', 'accessible', 'accommodating', 'accomplished', 'accountable', 'active', 'adaptable', 'admirable', 'adorable', 'adroit', 'adventurous', 'affable', 'affectionate', 'affirmative', 'agile', 'agreeable', 'airy', 'alive', 'alluring', 'altruistic', 'amazing', 'ambitious', 'amiable', 'amicable', 'amorous', 'amusing', 'appreciative', 'approachable', 'appropriate', 'artistic', 'assured', 'astute', 'athletic', 'attentive', 'attractive', 'authentic', 'authoritative', 'autonomous', 'awesome', 'balanced', 'beautiful', 'believable', 'beneficent', 'benevolent', 'benign', 'big-hearted', 'black', 'blessed', 'blissful', 'blue', 'bold', 'brainy', 'brave', 'bright', 'brilliant', 'broad-minded', 'calm', 'candid', 'captivating', 'careful', 'caring', 'casual', 'cerebral', 'charitable', 'charming', 'chaste', 'chatty', 'cheerful', 'chic', 'civil', 'clean', 'clearheaded', 'cognizant', 'colorful', 'comedic', 'comely', 'comfortable', 'commendable', 'communicative', 'companionable', 'compassionate', 'compatible', 'competent', 'complex', 'conciliatory', 'concise', 'confident', 'congenial', 'conscientious', 'considerate', 'consistent', 'constant', 'consummate', 'content', 'convincing', 'convivial', 'convulsive', 'cordial', 'courageous', 'courteous', 'cozy', 'creative', 'credible', 'cute', 'daring', 'decent', 'decisive', 'dedicated', 'deep', 'defined', 'delectable', 'deliberate', 'delightful', 'democratic', 'dependable', 'deserving', 'desirable', 'determined', 'devoted', 'dignified', 'diligent', 'diplomatic', 'direct', 'disarming', 'discerning', 'discreet', 'discrete', 'discriminating', 'distinctive', 'drab', 'dutiful', 'dynamic', 'eager', 'earnest', 'easy-going', 'easygoing', 'ecstatic', 'efficient', 'elated', 'elegant', 'eloquent', 'emotional', 'enchanted', 'encouraging', 'energetic', 'engaging', 'enlightened', 'enterprising', 'entertaining', 'enthusiastic', 'established', 'ethical', 'even-tempered', 'exact', 'excellent', 'extraordinary', 'exuberant', 'exultant', 'fabulous', 'fair-minded', 'faithful', 'fancy', 'fantastic', 'fascinating', 'fashionable', 'fearless', 'felicitous', 'fertile', 'fine', 'flexible', 'focused', 'forbearing', 'forceful', 'forgiving', 'forthright', 'frank', 'free', 'friendly', 'fruitful', 'fun', 'funny', 'gallant', 'generous', 'genial', 'genteel', 'gentle', 'genuine', 'glad', 'glamorous', 'gleeful', 'godly', 'good', 'good looking', 'good mannered', 'good-natured', 'goodhearted', 'gorgeous', 'gracious', 'grand', 'grateful', 'gray', 'great', 'green', 'gregarious', 'grounded', 'handsome', 'handy', 'happy', 'hard-working', 'hardy', 'harmonious', 'healthy', 'heavenly', 'heedful', 'helpful', 'heroic', 'hilarious', 'honest', 'hopeful', 'hospitable', 'humorous', 'imaginative', 'immaculate', 'impartial', 'important', 'impressive', 'independent', 'industrious', 'influential', 'ingenious', 'innocent', 'inspired', 'intellectual', 'intelligent', 'intuitive', 'inventive', 'jolly', 'joyful', 'jubilant', 'just', 'keen', 'kind', 'kissable', 'knowledgeable', 'laudable', 'law-abiding', 'learned', 'lenient', 'liberal', 'light', 'likeable', 'lively', 'logical', 'long', 'lovely', 'loving', 'loyal', 'lucid', 'lucky', 'luminous', 'magnetic', 'magnificent', 'masterly', 'mature', 'merciful', 'meritorious', 'merry', 'mild', 'mindful', 'moderate', 'modest', 'moral', 'natural', 'neat', 'neighborly', 'nice', 'nimble', 'noble', 'nourishing', 'obedient', 'open-minded', 'openhanded', 'optimistic', 'orange', 'original', 'passionate', 'patient', 'peaceful', 'perfect', 'persistent', 'personable', 'persuasive', 'philanthropic', 'philosophical', 'pioneering', 'placid', 'playful', 'pleasant', 'plucky', 'poetic', 'polished', 'polite', 'positive', 'powerful', 'practical', 'pragmatic', 'precious', 'priceless', 'privileged', 'pro-active', 'proactive', 'productive', 'professional', 'profound', 'progressive', 'prolific', 'prompt', 'proper', 'proud', 'provident', 'prudent', 'punctual', 'purple', 'purposeful', 'quick-witted', 'quickwitted', 'quiet', 'radiant', 'rational', 'ready', 'real', 'reasonable', 'receptive', 'refined', 'reflective', 'rejoicing', 'relaxed', 'reliable', 'relieved', 'remarkable', 'reposed', 'reserved', 'resolute', 'resourceful', 'respectful', 'resplendent', 'responsible', 'responsive', 'restrained', 'reverent', 'rich', 'right', 'righteous', 'robust', 'romantic', 'rosy', 'sagacious', 'saintly', 'satisfied', 'scholarly', 'seemly', 'self-reliant', 'sensible', 'sensitive', 'sensual', 'sentimental', 'serene', 'sexy', 'sharp', 'shrewd', 'shy', 'silly', 'sincere', 'smooth', 'sociable', 'soft-spoken', 'solid', 'sophisticated', 'soulful', 'sparkling', 'special', 'speedy', 'spirited', 'spiritual', 'splendid', 'spontaneous', 'sprite', 'spry', 'stable', 'steady', 'straightforward', 'strong', 'studious', 'stylish', 'suave', 'sublime', 'subtle', 'successful', 'sunny', 'superb', 'sweet', 'swell', 'sympathetic', 'systematic', 'tender', 'terrific', 'thankful', 'thorough', 'thoughtful', 'thrifty', 'tidy', 'tolerant', 'tough', 'tranquil', 'truthful', 'unassuming', 'understanding', 'unique', 'upright', 'valiant', 'versatile', 'victorious', 'vigorous', 'virtuous', 'visionary', 'vivacious', 'warm', 'warmhearted', 'well-rounded', 'whimsical', 'white', 'willing', 'winsome', 'wise', 'witty', 'wonderful', 'worldly', 'worthy', 'yellow', 'zealous'];
    }
    if (typeof nameList === 'undefined') {
        var nameList = ['abbey', 'abbigale', 'abbot', 'abby', 'abner', 'acea', 'acme', 'acorn', 'added', 'addi', 'addison', 'adria', 'aflac', 'africa', 'afro', 'aggie', 'agnes', 'agora', 'ajax', 'alejandro', 'alenie', 'alex', 'alexander', 'alexis', 'alfonzo', 'alfredo', 'algonquin', 'alien', 'alina', 'allie', 'alliebear', 'allison', 'almond', 'alona', 'amber', 'amie', 'amiga', 'amigo', 'ammeretto', 'amotyoshy', 'anabella', 'anaconda', 'andre', 'andromada', 'andy', 'angel', 'angie', 'angus', 'anna', 'annabelle', 'anne', 'annie', 'apachie', 'aphrodite', 'apollo', 'april', 'araby', 'archie', 'archy', 'ares', 'arielle', 'arko', 'arlena', 'armadillo', 'aroura', 'arrura', 'arth', 'arther', 'arun', 'ashley', 'ashton', 'asia', 'asja', 'aspen', 'asteroid', 'astor', 'astrix', 'atlas', 'atticus', 'audrey', 'auggie', 'augie', 'augusta', 'augustine', 'australia', 'avalance', 'avalanch', 'avocado', 'axel', 'azul', 'azzurra', 'babusca', 'baby', 'bacardi', 'bagueera', 'bail', 'bailey', 'baldwin', 'bambie', 'bandit', 'banjo', 'barbie', 'barker', 'barkley', 'barney', 'baron', 'basey', 'bash', 'bass', 'batter', 'battle', 'baxter', 'bayou', 'bayzyl', 'bean', 'beanie', 'beans', 'bear', 'bearsly', 'beasley', 'beast', 'beatrice', 'becka', 'beebee', 'beef', 'beer', 'beet', 'beetovan', 'beinet', 'belinda', 'bella', 'belle', 'belvedere', 'benji', 'bently', 'bertha', 'bess', 'beth', 'bethany', 'bianca', 'biggy', 'bijou', 'bilbow', 'bill', 'billie', 'billy', 'bindi', 'bindy', 'bingo', 'birch', 'biscuit', 'bismarck', 'bitsy', 'black', 'blackbeard', 'blackie', 'blacky', 'blaire', 'blake', 'blanca', 'blaze', 'blazer', 'bleki', 'blitz', 'blizzard', 'blue', 'bluebeard', 'bodger', 'bodie', 'boey', 'boggs', 'bogie', 'boma', 'bommer', 'bone', 'bonita', 'bonnie', 'booble', 'booker', 'bookie', 'boomer', 'boonie', 'boot', 'bootie', 'boozer', 'borris', 'bosco', 'boss', 'bowie', 'bowser', 'bozo', 'brace', 'brandon', 'brandy', 'brass', 'brat', 'bravornick', 'braxton', 'brazil', 'bread', 'breena', 'breeze', 'brenda', 'brendan', 'brendy', 'brett', 'brew', 'brewster', 'bria', 'briak', 'brianna', 'bridget', 'brief', 'brier', 'brina', 'brisby', 'britt', 'brittany', 'brize', 'brodei', 'brody', 'bronson', 'bronx', 'brooke', 'brownie', 'bruce', 'brummy', 'bruno', 'bruster', 'brut', 'brutus', 'bubba', 'bubbles', 'buck', 'buddy', 'buff', 'buffy', 'buford', 'bugger', 'bugle', 'bugsy', 'bull', 'bullet', 'bullseye', 'bully', 'bumbles', 'bunker', 'bunky', 'burgandy', 'buster', 'butch', 'butcher', 'butkus', 'butler', 'butter', 'butterbean', 'buttercup', 'butterscotch', 'button', 'buttons', 'buzz', 'buzzer', 'cacahuete', 'cain', 'caine', 'calanthea', 'caleb', 'cali', 'callie', 'calvin', 'camilio', 'camomile', 'candice', 'candie', 'candy', 'caramel', 'carla', 'carley', 'carmen', 'carrie', 'carrissa', 'caruso', 'casey', 'cash', 'casper', 'cassie', 'catrina', 'ceaser', 'cedric', 'celeste', 'celsy', 'celtie', 'chachorro', 'chaco', 'chai', 'chamomille', 'champ', 'chance', 'chancie', 'chandler', 'chang', 'chantilly', 'char', 'chara', 'charisma', 'charity', 'charley', 'charlie', 'chase', 'chatter', 'chauncey', 'cheech', 'cheeks', 'cheerio', 'chelsea', 'chelsy', 'cheops', 'cher', 'cherish', 'cherokee', 'cherokees', 'chestnut', 'chewer', 'chewy', 'cheyenne', 'chica', 'chicklet', 'chico', 'chief', 'chili', 'chiller', 'chimo', 'china', 'chip', 'chipper', 'chiquita', 'chloe', 'chocolate', 'chomp', 'chomper', 'choo', 'chop', 'chopper', 'chris', 'chrissy', 'christine', 'chubber', 'chumley', 'cidiac', 'cierra', 'cinder', 'cindy', 'cinnamon', 'clackers', 'claire', 'clancy', 'clarence', 'clark', 'claudette', 'clementine', 'cleo', 'cleopatra', 'clifford', 'cloke', 'cloker', 'clover', 'clyde', 'coaco', 'cobby', 'coby', 'coco', 'cocoa', 'coconut', 'cody', 'coffee', 'colby', 'colleen', 'collette', 'colonel', 'colton', 'comet', 'commander', 'confucius', 'conner', 'conrad', 'coojo', 'cooker', 'cookie', 'coonie', 'cooper', 'cooter', 'copper', 'coquihalla', 'corico', 'corona', 'cory', 'cosmo', 'courtney', 'crackle', 'cricket', 'crinkle', 'croc', 'crunch', 'crystal', 'cuddle', 'cuddles', 'cuddly', 'cujo', 'cullen', 'cupcake', 'cupid', 'curly', 'curtis', 'cutenise', 'cutie', 'cyber', 'cyclops', 'czar', 'czarina', 'daisy', 'dakota', 'dale', 'dalila', 'dallis', 'dally', 'danim', 'danny', 'dante', 'daphne', 'darby', 'darla', 'darley', 'darwin', 'dash', 'dear', 'deedle', 'deeohhgee', 'deer', 'deisel', 'deja', 'delight', 'delihla', 'demitasse', 'denali', 'desiree', 'destiny', 'devin', 'dewey', 'dexter', 'diamond', 'diana', 'dice', 'digger', 'dill', 'dillon', 'dimand', 'dinky', 'diogo', 'diva', 'divit', 'dixie', 'doby', 'doger', 'doghnut', 'dolly', 'dominique', 'domino', 'donald', 'donner', 'donno', 'doodle', 'doodles', 'doogan', 'dooge', 'dorf', 'dorky', 'dottie', 'doves', 'dozer', 'draco', 'drake', 'drew', 'drusilla', 'dubai', 'duchess', 'duffy', 'dugger', 'duke', 'duncan', 'dundee', 'dusty', 'dutch', 'dutchess', 'dyan', 'earthquake', 'easter', 'ebony', 'echo', 'eddie', 'edgedhedge', 'eevis', 'einstein', 'electrod', 'elektra', 'elena', 'elita', 'elizabeth', 'ella', 'ellie', 'elliot', 'ellsa', 'ellsie', 'elmer', 'elmo', 'elvis', 'emily', 'emma', 'emmy', 'eric', 'erica', 'erika', 'erin', 'erly', 'erma', 'eskimo', 'ether', 'eveliina', 'evelyn', 'evita', 'ewoke', 'fabreezio', 'faith', 'fajita', 'farrah', 'fatty', 'fawn', 'fefe', 'felicia', 'ferris', 'feta', 'fibal', 'fido', 'fiesta', 'fifi', 'fillmore', 'finn', 'finnigin', 'fisher', 'fiver', 'fizz', 'flag', 'flash', 'fleaber', 'fleetwood', 'fletcher', 'flipper', 'flitter', 'florine', 'flower', 'fluffy', 'fluke', 'flurry', 'fobar', 'foofie', 'footer', 'foxy', 'frances', 'frankie', 'frasier', 'freckles', 'freddy', 'freeway', 'freewill', 'friendly', 'fritz', 'froggy', 'frosty', 'funky', 'furgie', 'fuzz', 'gabby', 'gabe', 'gable', 'gabrielle', 'galatea', 'galaxy', 'gale', 'gauge', 'geegee', 'geisha', 'genevieve', 'georgia', 'gertie', 'ghost', 'gideon', 'gidget', 'giggles', 'gigi', 'gilbert', 'ginger', 'ginny', 'giovana', 'gisela', 'gizmo', 'goldy', 'goliath', 'gooble', 'goochy', 'goodwill', 'gouda', 'grace', 'gracie', 'gram', 'gravy', 'greta', 'gretchen', 'gretea', 'grizzle', 'grizzly', 'groovy', 'grover', 'gryphon', 'guency', 'guess', 'gumbo', 'gunner', 'guss', 'gwen', 'gwhneth', 'gwynevere', 'gypsy', 'gyzmo', 'haddie', 'hailey', 'haley', 'hambone', 'hanna', 'hannah', 'happy', 'harley', 'harmoni', 'harvey', 'hatches', 'hayden', 'hayley', 'hazel', 'heath', 'heather', 'hector', 'heffer', 'heidi', 'helga', 'henry', 'herman', 'hero', 'hershey', 'hoagie', 'hobbs', 'hogie', 'holly', 'homer', 'honey', 'hoosier', 'hooter', 'hootie', 'hope', 'hoppy', 'horse', 'hoshi', 'hotdog', 'hotshot', 'howard', 'howie', 'huffer', 'hugger', 'hunter', 'huskaya', 'iggy', 'ilka', 'ingrid', 'inky', 'iris', 'isaac', 'isabella', 'isabelle', 'ivan', 'ivory', 'izzy', 'jabber', 'jackie', 'jackson', 'jade', 'jagger', 'jake', 'jakie', 'jamie', 'jammie', 'janie', 'jasmine', 'jasper', 'jaws', 'jazz', 'jazzman', 'jazzy', 'jedi', 'jeffy', 'jelle', 'jellybean', 'jeniveve', 'jenkins', 'jenny', 'jenson', 'jerky', 'jerrico', 'jessie', 'jessy', 'jewel', 'jezebel', 'jill', 'jillian', 'jimbo', 'jobe', 'jock', 'joey', 'jojo', 'joker', 'jonny', 'junx', 'kacey', 'kahlua', 'kaitlin', 'kamy', 'kane', 'kara', 'karane', 'karita', 'kate', 'katie', 'katrina', 'kawii', 'kaydan', 'kayla', 'kazi', 'keely', 'kelly', 'kelsey', 'kelsi', 'kendra', 'kera', 'khan', 'kiara', 'kibbles', 'kicks', 'kiddo', 'kiefer', 'kierra', 'kiki', 'kiko', 'killer', 'king', 'kingsly', 'kingston', 'kinninnik', 'kipper', 'kippy', 'kirby', 'kirsty', 'kisser', 'kissie', 'kito', 'kitty', 'kizmit', 'koala', 'kobe', 'kobi', 'kodashay', 'kodi', 'kodiac', 'kodiak', 'koka', 'kona', 'kosmo', 'kramer', 'krissy', 'krypto', 'kugo', 'kujo', 'kuma', 'kumatee', 'kuno', 'kuvic', 'kyla', 'kyle', 'kyzer', 'lacey', 'lady', 'lala', 'lana', 'lancelot', 'lanco', 'lane', 'lanka', 'lary', 'lassie', 'lava', 'lavender', 'layka', 'layla', 'leha', 'leia', 'leon', 'leonard', 'lexi', 'lexie', 'lexus', 'lifesaver', 'lila', 'lilac', 'lilly', 'lily', 'lina', 'link', 'lippy', 'lipton', 'lizzie', 'lizzy', 'lobo', 'logan', 'lola', 'lollie', 'lolliepup', 'loopy', 'loren', 'louie', 'louis', 'lover', 'lovey', 'luath', 'lucky', 'lucy', 'ludwig', 'luke', 'lula', 'lulu', 'lumpy', 'luna', 'lyndsy', 'macaroni', 'macky', 'madam', 'maddi', 'maddy', 'madison', 'maggie', 'magic', 'magintey', 'magnolia', 'maisie', 'major', 'malcolm', 'mally', 'manda', 'mandy', 'manfred', 'mansell', 'marbella', 'margo', 'margot', 'mariah', 'marigoal', 'marlon', 'mars', 'mason', 'matilda', 'matinee', 'maui', 'mausik', 'mavice', 'maxime', 'maxwell', 'maya', 'mayook', 'mazie', 'mazzy', 'meadow', 'meat', 'mecca', 'medussa', 'meeco', 'meeko', 'meep', 'megan', 'melanie', 'melinda', 'melissa', 'melvin', 'mena', 'mercedes', 'mercury', 'mercy', 'merlin', 'mesa', 'michael', 'mick', 'micky', 'midget', 'midnight', 'mighty', 'mika', 'mike', 'mila', 'mildred', 'miles', 'millie', 'milly', 'milo', 'mimi', 'mindy', 'mingo', 'mingus', 'minnie', 'mino', 'misha', 'mishka', 'missy', 'misty', 'mittsy', 'mitzie', 'mocha', 'mochi', 'modac', 'modlaun', 'mody', 'moira', 'molly', 'momo', 'mona', 'monica', 'monk', 'monster', 'montana', 'montgomery', 'monty', 'mooch', 'moofie', 'mooglie', 'mooky', 'moon', 'moopie', 'moopsie', 'moose', 'mora', 'morgan', 'mortimer', 'moses', 'mouthy', 'mozart', 'muddy', 'mudge', 'mufasa', 'muffin', 'muffinhead', 'muffy', 'mugger', 'muggles', 'mugsley', 'mulder', 'muley', 'mulligan', 'munchkin', 'muncie', 'muppet', 'murgie', 'murphy', 'murray', 'myasia', 'mystic', 'nacho', 'nadia', 'nala', 'nanook', 'nanuk', 'naomie', 'napolean', 'nash', 'nazareth', 'neal', 'nebo', 'neely', 'nemisis', 'neon', 'nero', 'nestle', 'nibbles', 'nick', 'nickolas', 'nicky', 'nico', 'nicole', 'nigel', 'nika', 'nike', 'niky', 'nina', 'ninja', 'niobe', 'nipper', 'nita', 'noble', 'noby', 'noelle', 'noodles', 'nookum', 'norman', 'normey', 'nosy', 'nova', 'nutmeg', 'oakley', 'oaky', 'obbie', 'oberon', 'octavia', 'oden', 'odie', 'oilly', 'oliver', 'olly', 'oney', 'onyx', 'opal', 'oprah', 'oreo', 'orion', 'orista', 'oscar', 'osito', 'otis', 'otter', 'otto', 'ozer', 'pablo', 'paddy', 'paige', 'paisley', 'pancake', 'pancho', 'panda', 'pandabear', 'pandora', 'pandy', 'pansy', 'panzer', 'papi', 'papito', 'pappy', 'paradise', 'paris', 'parry', 'pastrami', 'patches', 'patchy', 'patton', 'patty', 'pavarotti', 'payne', 'payton', 'pb&j', 'peach', 'peaches', 'peachy', 'peanut', 'pebbles', 'pendragon', 'penny', 'pepi', 'pepita', 'pepper', 'peppy', 'pepsi', 'perfect', 'periwinkle', 'person', 'peso', 'petal', 'pete', 'petie', 'peyton', 'pheonix', 'philly', 'phoebe', 'pickle', 'pierre', 'piglet', 'pilot', 'pimple', 'pinky', 'piper', 'pippin', 'pipsqueak', 'pirate', 'pistachio', 'pita', 'pixi', 'pixie', 'plushbottom', 'pluto', 'pocito', 'poco', 'poet', 'pointer', 'poker', 'pokes', 'pokey', 'pokie', 'polly', 'poncho', 'pony', 'pooch', 'poochie', 'poof', 'poofie', 'pooker', 'pookie', 'pooter', 'popeye', 'popsicle', 'porkchop', 'poseidon', 'potter', 'prancer', 'preacher', 'precious', 'price', 'pricilla', 'pride', 'prim', 'primdrose', 'prince', 'princess', 'princey', 'prissy', 'prometheus', 'puck', 'pugsley', 'puka', 'pumpkin', 'punch', 'punkin', 'pupcake', 'puppala', 'puppels', 'puppy', 'putt', 'queen', 'queenie', 'queno', 'quincy', 'quinsey', 'racer', 'racheal', 'radar', 'ragina', 'raikaard', 'rainbow', 'ralph', 'rami', 'ramius', 'ramona', 'rampage', 'ramses', 'ranalldo', 'randy', 'ranger', 'rascal', 'rashi', 'raspuntine', 'ratter', 'ratty', 'reba', 'rebel', 'reese', 'reggie', 'remi', 'remmington', 'reno', 'repo', 'rhemy', 'ribbon', 'ricardo', 'richardson', 'ricky', 'rigby', 'riggs', 'riku', 'riley', 'ringer', 'ringo', 'ripley', 'ripper', 'ripple', 'ripples', 'risa', 'rita', 'river', 'robby', 'robert', 'roche', 'rock', 'rocket', 'rocky', 'romeo', 'rommelroo', 'rooky', 'roosevelt', 'rooty', 'rory', 'rosco', 'roscoe', 'rose', 'rosey', 'rosie', 'rothko', 'rover', 'rowan', 'rowdy', 'roxy', 'ruby', 'rudo', 'rudolf', 'ruffles', 'rufis', 'rufus', 'rugbe', 'ruger', 'runky', 'rush', 'rusty', 'rutherford', 'saana', 'saanis', 'sabastian', 'saber', 'sabrina', 'sabryna', 'sabyr', 'sada', 'sadie', 'sage', 'sahara', 'saint', 'salem', 'salena', 'sally', 'salsa', 'salt', 'salty', 'salvador', 'samantha', 'sammy', 'samorai', 'sampson', 'samson', 'sancho', 'sandine', 'sandra', 'sandy', 'sansa', 'saphire', 'sarge', 'sarita', 'sasha', 'sassy', 'sauchy', 'saucy', 'saxon', 'scampy', 'scar', 'scare', 'scarlet', 'schatzie', 'schmoopie', 'schnoogle', 'schnookie', 'schnookum', 'scooby', 'scooter', 'scout', 'scruffy', 'sealy', 'searchlight', 'sebastian', 'senna', 'serena', 'seth', 'shadow', 'shakespeare', 'shambala', 'shamrock', 'shania', 'shanook', 'shasta', 'sheba', 'sheena', 'shelby', 'sheldon', 'shelly', 'sherlock', 'sherman', 'shery', 'shia', 'shiloh', 'shira', 'shishkabob', 'shotzie', 'shreddar', 'shultz', 'shyla', 'sidney', 'sierra', 'silver', 'silvia', 'simba', 'simon', 'skeeter', 'skid', 'skidmark', 'skip', 'skippy', 'skittles', 'skoobee', 'skumpy', 'slasher', 'slay', 'slider', 'slogan', 'sloggo', 'smokey', 'smooch', 'smooches', 'smoochie', 'smoosh', 'smuckers', 'smurf', 'snap', 'snapper', 'sneakers', 'sneaky', 'snickers', 'sniffer', 'snip', 'snipper', 'snoogle', 'snoogy', 'snookie', 'snookum', 'snoopy', 'snoozy', 'snopes', 'snow', 'snower', 'snowie', 'snuffles', 'snuggles', 'snuggy', 'soapy', 'socks', 'socrates', 'sodapop', 'soleyman', 'solomon', 'sondra', 'sonja', 'sonny', 'sooner', 'sophie', 'spangle', 'spanky', 'sparkle', 'sparks', 'sparky', 'spazz', 'specks', 'spence', 'spencer', 'spic', 'spice', 'spicer', 'spike', 'splotches', 'spok', 'spooke', 'sport', 'spot', 'spottie', 'springer', 'spuddy', 'spuds', 'spunky', 'spyro', 'squat', 'squeakers', 'squeeker', 'squints', 'squirels', 'squirt', 'squizz', 'stacha', 'stacy', 'stanley', 'star', 'starla', 'starlet', 'steel', 'stimpy', 'sting', 'stinger', 'stocker', 'stooker', 'storm', 'stormy', 'storytime', 'street', 'stripes', 'strut', 'stumpy', 'suckers', 'suga', 'sugar', 'suki', 'sully', 'sundance', 'sunny', 'sunshine', 'superman', 'susan', 'suzy', 'sweepy', 'sweetie', 'swirly', 'tabby', 'tabitha', 'taco', 'tacoma', 'taddle', 'taffey', 'taffy', 'tamara', 'tamers', 'tamu', 'tanner', 'tanya', 'tara', 'tasco', 'tasha', 'tashy', 'tassle', 'tata', 'tatoo', 'tattle', 'tatum', 'taxi', 'taya', 'taylor', 'tazzee', 'teeka', 'temble', 'tempest', 'tennessee', 'tequila', 'teresa', 'tess', 'tessa', 'texas', 'theta', 'thor', 'thumbelina', 'thumper', 'thunder', 'tidbit', 'tiddy', 'tiffany', 'tiffinany', 'tiffy', 'tiger', 'tigger', 'tigra', 'tigy', 'tijuana', 'tika', 'tike', 'tilly', 'timbit', 'timmy', 'timo', 'tina', 'tink', 'tinker', 'tinkerbell', 'tinky', 'tino', 'tiny', 'tipper', 'tippy', 'tirza', 'tito', 'toast', 'toby', 'todd', 'toddle', 'toffee', 'toffi', 'tommy', 'toni', 'tonia', 'tootsie', 'topaz', 'tosh', 'towser', 'tracey', 'tracker', 'trampus', 'trapper', 'traveler', 'travis', 'trent', 'tres', 'trevor', 'tria', 'tricia', 'trinka', 'trinket', 'trista', 'tristan', 'trix', 'trixy', 'truman', 'tucker', 'tuffy', 'tugger', 'tugs', 'tulip', 'tundra', 'turbo', 'turner', 'turtle', 'tussler', 'twaddle', 'tweeks', 'tweety', 'twiggy', 'twigs', 'twinkie', 'twinkle', 'twister', 'twix', 'tyler', 'tyrone', 'tyson', 'ujean', 'ullyses', 'umppy', 'uther', 'valentine', 'valentino', 'vassel', 'vegas', 'venus', 'vick', 'vicky', 'victoria', 'vilo', 'vince', 'vinnie', 'virginia', 'vixen', 'volacano', 'vulcan', 'waco', 'waffles', 'waldo', 'walker', 'wally', 'walnut', 'wanda', 'wander', 'warlock', 'watson', 'waylon', 'webster', 'weezee', 'wendy', 'west', 'whisky', 'whisper', 'wiggles', 'wild', 'wildly', 'wiley', 'will', 'willow', 'willy', 'winnie', 'winsor', 'winston', 'wishbone', 'wither', 'wolf', 'wolfy', 'wonderdog', 'wonderful', 'woody', 'woofer', 'woogle', 'woogy', 'wookie', 'wookum', 'woozie', 'worf', 'wrinkles', 'wuddle', 'wuddly', 'wuggy', 'wunny', 'wynona', 'xanadu', 'xander', 'xavior', 'xena', 'yakky', 'yandy', 'yapper', 'yeller', 'yipper', 'yoda', 'yodett', 'yoki', 'yoko', 'yowler', 'yoyo', 'yuki', 'yummers', 'zach', 'zadie', 'zamboni', 'zany', 'zeek', 'zeiger', 'zelda', 'zena', 'zeniba', 'zeus', 'ziggy', 'zima', 'zingara', 'zinny', 'zipper', 'zippy', 'zoey', 'zork', 'zozo', 'zuca', 'zuess', 'zuma'];
    }
    while(true){
        var unique_name = create_nickname();
        if(unique_name.length < charCount){
            break;
        }
        else {
            unique_name = create_nickname();
        }
    }
    if (nameType == undefined){
        return unique_name;
    }
    else if(nameType == 'title') {
        return title(unique_name);
    }
    else if(nameType == 'slug') {
        return slug(unique_name);
    }
}
