# Article

Ключевая доменная сущность приложения — статья блога. Инкапсулирует модель данных статьи и её отображение (детальный просмотр и элемент списка).

## Описание

Статья состоит из набора типизированных блоков (`ArticleBlock`): текст, код, изображение, цитата. Сущность хранит и отдаёт данные одной статьи (`ArticleDetailsSchema`), а также предоставляет компоненты для рендера статьи в разных представлениях (`ArticleView` — список/плитка).

Контролы фильтрации ленты вынесены в отдельные фичи: сортировка — [ArticleSortSelector](../../features/ArticleSortSelector), фильтр по типу — [ArticleTypeSelector](../../features/ArticleTypeSelector) (там же теперь живёт enum `ArticleType`).

## Состав

- `ui/ArticleDetails` — детальный просмотр статьи с рендером всех типов блоков.
- `ui/ArticleList`, `ui/ArticleListItem` — список статей и его элемент (с виртуализацией и скелетонами).
- `ui/ArticleCodeBlockComponent`, `ArticleTextBlockComponent`, `ArticleImageBlockComponent`, `ArticleQuoteBlockComponent` — рендеры отдельных блоков контента.
- `model/slices/articleDetailsSlice` — редьюсер состояния одной статьи (подключается асинхронно).
- `model/services/fetchArticleById` — загрузка статьи по id.
- `model/selectors`, `model/types` — селекторы и типы (`Article`, `ArticleBlock`, `ArticleDetailsSchema`).
- `model/consts/articleConsts` — константы `ArticleBlockType` и `ArticleView`.

## Public API

```ts
export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleView } from './model/consts/articleConsts';
export { getArticleDetailsData } from './model/selectors/getArticleDetailsData/getArticleDetailsData';
export type { ArticleDetailsSchema, Article } from './model/types/article';
```
