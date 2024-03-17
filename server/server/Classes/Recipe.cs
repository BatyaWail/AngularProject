////using Microsoft.VisualBasic;

////namespace server.Classes
////{
////    public class Recipe//זה לא בדוק
////    {
////        //  public   static  int  = 0;

////        private static int id = 0;
////        public int Id { get; }//לבדוק אבטחה!
////        public string Name { get; set; }
////        public int CategoryId { get; set; }
////        public int Minutes { get; set; }
////        public int DifficultyLevel { get; set; }
////        public DateTime DateAdd { get; set; }
////        public List<string> ComponentList { get; set; }//רכיבים
////        public List<string> PreparationList { get; set; }
////        public int User { get; set; }
////        public string ImgRouting { get; set; }

////        // ...

////        //public Recipe()
////        //{
////        //    Ingredients = new List<string>();
////        //    Instructions = new List<string>();
////        //}
////        public Recipe(string recipeName, int categoryId, int preparationTimeInMinutes, int difficultyLevel,
////        DateTime dateAdded, List<string> ingredients, List<string> instructions, int userId,
////        string imagePath)
////        {
////            id++;
////            Id = id;
////            Name = recipeName;
////            CategoryId = categoryId;
////            Minutes = preparationTimeInMinutes;
////            DifficultyLevel = difficultyLevel;
////            DateAdd = dateAdded;
////            ComponentList = ingredients;
////            PreparationList = instructions;
////            User = userId;
////            ImgRouting = imagePath;
////        }


////        // ...



////    }
////}

//public class Recipe
//{
//    private static int id = 0;

//    public int Id { get; set; }
//    public string Name { get; set; }
//    public string Category { get; set; }
//    public int Minutes { get; set; } // Assuming minutes should be an integer
//    public int DifficultyLevel { get; set; } // Assuming difficulty level should be an integer
//    public DateTime? DateAdd { get; set; } // Made optional with ?
//    public List<string> Ingredients { get; set; }
//    public List<string> Instructions { get; set; }
//    public string User { get; set; }
//    public string ImgRouting { get; set; }

//    // Constructor (update parameter types if needed)
//    public Recipe(string name, string categoryName, int minutes, int difficultyLevel,
//                  DateTime? dateAdd, List<string> instructions, List<string> ingredients,
//                  string user, string imgRouting)
//    {
//        id++;
//        Id = id;
//        Name = name;
//        Category = categoryName;
//        Minutes = minutes;
//        DifficultyLevel = difficultyLevel;
//        DateAdd = dateAdd;
//        Ingredients = ingredients;
//        Instructions = instructions;
//        User = user;
//        ImgRouting = imgRouting;
//    }
//}

using server.Classes;

public class Recipe
{
    private static int id = 0;

    public int Id { get; set; }
    public string Name { get; set; }
    public string Category { get; set; } // Renamed from CategoryId
    public int Minutes { get; set; }
    public int DifficultyLevel { get; set; }
    public DateTime? DateAdd { get; set; }
    public List<string> Ingredients { get; set; } // Renamed from ComponentList
    public List<string> Instructions { get; set; } // Renamed from PreparationList
    public string User { get; set; }
    public string ImgRouting { get; set; }

    // Constructor (update parameter types if needed)
    public Recipe(string name, string category, int minutes, int difficultyLevel,
                  DateTime? dateAdd, List<string> ingredients, List<string> instructions,
                  string user, string imgRouting)
    {
        id++;
        Id = id;
        Name = name;
        Category = category;
        Minutes = minutes;
        DifficultyLevel = difficultyLevel;
        DateAdd = dateAdd;
        Ingredients = ingredients;
        Instructions = instructions;
        User = user;
        ImgRouting = imgRouting;
    }
}


