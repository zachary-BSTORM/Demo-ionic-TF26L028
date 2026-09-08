# création d'un formulaire

- Vérifier les imports : 
    - ReactiveFormsModule => (permet au FormGroup d'être reconnu dans la balise form de l'html)
    ```ts
    @Component({
    selector: 'app-add-movie',
    templateUrl: './add-movie.component.html',
    styleUrls: ['./add-movie.component.scss'],
    // nécéssite un import
    imports: [ReactiveFormsModule],
    })
    ```

- Importer les éléments nécéssaires : 

    - Injecter les services 
        - movieService pour accéder à la methode AddMovie
        ```ts
         private movieService = inject(MovieService)
        ```

- Construire le formulaire dans le ts

    - Déclarer un objet de type formGroup
        - instancier avec un nouveau formGroup

        - methode 1
        ```ts
        formMovie : FormGroup;

        fb = inject(FormBuilder)

        constructor(){
            this.formMovie = this.fb.group({
                champ1 : ['valeur par défaut':[Validators.required]]
            })
        }
        ```

        - methode 2 
        ```ts
        formMovie = new FormGroup({
            champ1 : new FormControl('valeur par défaut' , [Validators.required])
        })
        ```

        - implémenter une methode pour la soumission du formulaire
            - faire appel au service 
            ```ts
            onSubmit(){
                if(this.formMovie.valid){
                const valueForm = this.formMovie.value as CreateMovie
                
                this.movieService.addMovie(valueForm)

                this.nav.navigateForward(['/movies'])
                }
    
            }
            ```

- Dans le html

    - Ajouter une balise form 
        - avec les attributs : 
            - [FormGroup]="notreForGroup"
            - (ngSubmit)="notreMethode()"
        ```ts
        <form [formGroup]="formMovie" (ngSubmit)="onSubmit()"></form>
        ```

    - pour chaque champ effectuer la liaison avec le : 
        - FormControlName=""
        ```ts
        <ion-input type="text" formControlName="title"></ion-input>
        ```

    - un boutton pour la soumission du formulaire
        ```ts
        <ion-button type="submit"></ion-button>
        ```

    - Ajout de message d'erreur 
    ```ts
        @if(
            formMovie.get('title')?.getError('required') 
            && 
            formMovie.get('title')?.touched
            ){
        <ion-card-subtitle color="danger" class="ion-text-center">
                Le titre est obligatoire
        </ion-card-subtitle>
        }
    ```