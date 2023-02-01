import express from 'express'
import puppeteer from 'puppeteer'
import MeiliSearchClient from '../../db/MeiliSearch.js'
const router = express.Router()

router.get('/hackathons/devpost', async (req, res) => {
  try {
    const { page_number } = req.query
    const response = await MeiliSearchClient.index('devpost').getDocuments({
      limit: 25
    })
    if (response)
      return res
        .status(200)
        .json({ result: response, msg: 'done', status: 200 })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

router.get('/hackathons/devfolio', async (req, res) => {
  // console.log(await MeiliSearchClient.index('devfolio').deleteAllDocuments())

  try {
    // const browser = await puppeteer.launch({
    //   args: ['--disable-web-security', '--disable-features=IsolateOrigins'],
    //   headless: false
    // })
    // //   // const hackathonStatus = ['application_open', 'end', 'upcoming']
    // const page = await browser.newPage()
    // await page.evaluate(() => {
    //   var url = 'https://api.devfolio.co/api/search/hackathons'
    //   var xhr = new XMLHttpRequest()
    //   xhr.open('POST', url)
    //   xhr.setRequestHeader('Accept', 'application/json')
    //   xhr.setRequestHeader('Content-Type', 'application/json')
    //   xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4) {
    //       document.body.appendChild(document.createElement('pre'))
    //       document.getElementsByTagName('pre')[0].innerText = xhr.responseText
    //     }
    //   }
    //   var data = `{
    //     "type": "upcoming",
    //     "from": 0,
    //     "size": 1000
    // }`
    //   xhr.send(data)
    // })
    // await page.waitForSelector('pre')
    // let element = await page.$('pre')
    // let value = await page.evaluate(el => el.textContent, element)
    // if (value) {
    //   await MeiliSearchClient.index('devfolio').addDocuments(
    //     JSON.parse(value)
    //       .hits.hits.map(s => s._source)
    //       .map(s => ({
    //         ...s,
    //         end_date: Date.parse(s.ends_at),
    //         Hstatus: 'upcoming'
    //       }))
    //   )
    //   await MeiliSearchClient.index('devfolio').updateFilterableAttributes([
    //     'end_date',
    //     'Hstatus',
    //     'private',
    //     'devfolio_official',
    //     'featured',
    //     'apply_mode',
    //     'status',
    //     'rating',
    //     'city'
    //   ])
    // }
    // await page.close()
    // await browser.close()
    const result = {}
    const Ongoing = await MeiliSearchClient.index('devfolio').search('', {
      filter: `end_date > ${Date.now()} AND Hstatus = "application_open"`,
      limit: 50
    })
    const Upcoming = await MeiliSearchClient.index('devfolio').search('', {
      filter: `end_date > ${Date.now()} AND Hstatus = "upcoming"`,
      limit: 50
    })
    const Past = await MeiliSearchClient.index('devfolio').search('', {
      filter: `Hstatus = "past"`,
      limit: 50
    })

    result.Ongoing = Ongoing.hits
    result.Upcoming = Upcoming.hits
    result.Past = Past.hits

    if (result) res.status(200).json({ result, msg: 'done', status: 200 })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

router.get('/hackathons/devfolio/project', async (req, res) => {
  const { slug } = req.query
  try {
    const browser = await puppeteer.launch({
      args: ['--disable-web-security', '--disable-features=IsolateOrigins']
    })
    const page = await browser.newPage()
    await page.evaluate(slug => {
      var url = 'https://api.devfolio.co/api/search/projects'
      var xhr = new XMLHttpRequest()
      xhr.open('POST', url)
      xhr.setRequestHeader('Accept', 'application/json')
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          document.body.appendChild(document.createElement('pre'))
          document.getElementsByTagName('pre')[0].innerText = xhr.responseText
        }
      }
      var data = `{
    "hackathon_slugs": [
        "${slug}"
    ],
    "q": "",
    "filter": "all",
    "prizes": [],
    "from": 0,
    "size": 500
}`
      xhr.send(data)
    }, slug)
    await page.waitForSelector('pre')
    let element = await page.$('pre')
    let value = await page.evaluate(el => el.textContent, element)

    await browser.close()
    if (value)
      res.status(200).json({
        result: JSON.parse(value).hits.hits.map(s => s._source),
        msg: 'done',
        status: 200
      })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

router.get('/hackathons/unstop', async (req, res) => {
  try {
    // const { page_number } = req.query
    // console.log(page_number)
    // const browser = await puppeteer.launch()
    // for (let i = 1; i <= 40; i++) {
    //   const page = await browser.newPage()
    //   await page.goto(
    //     'https://unstop.com/api/public/opportunity/search-new?page=' + i
    //   )
    //   await page.waitForSelector('pre')
    //   let element = await page.$('pre')
    //   let value = await page.evaluate(el => el.textContent, element)
    //   await page.close()
    //   await MeiliSearchClient.index('unstop').addDocuments(
    //     JSON.parse(value)?.data?.data?.map(s => ({
    //       ...s,
    //       end_date_filter: Date.parse(s?.end_date)
    //     }))
    //   )
    //   console.log(i, 'done')
    // }
    // const page = await browser.newPage()
    // await page.goto(
    //   `https://unstop.com/api/public/opportunity/search-new?opportunity=all&sort=&dir=&filters=Open,,All,All&types=oppstatus,teamsize,payment,eligible&atype=explore&page=${page_number}`
    // )
    // await page.waitForSelector('pre')
    // let element = await page.$('pre')
    // let value = await page.evaluate(el => el.textContent, element)
    // await browser.close()
    // if (value)

    // const r = await MeiliSearchClient.index('unstop').addDocuments(
    //   unstopOpportunities?.hits?.map(s => ({
    //     ...s,
    //     end_date_filter: Date.parse(s?.end_date)
    //   }))
    // )

    res.status(200).json({
      result: await MeiliSearchClient.index('unstop').search('', {
        filter: `end_date_filter > ${Date.now()}`,
        offset: parseInt(req.query.page_number),
        limit: 12
      }),
      msg: 'done',
      status: 200
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

router.get('/hackathons/unstop/featured', async (req, res) => {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://unstop.com/api/public/get-all-featured')
    await page.waitForSelector('pre')
    let element = await page.$('pre')
    let value = await page.evaluate(el => el.textContent, element)
    await browser.close()
    if (value)
      return res.status(200).json({ result: value, msg: 'done', status: 200 })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

router.get('/unstop/:id', async (req, res) => {
  try {
    const { id } = req.params
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://unstop.com/api/public/competition/' + id)
    await page.waitForSelector('pre')
    let element = await page.$('pre')
    let value = await page.evaluate(el => el.textContent, element)
    await browser.close()
    if (value)
      return res.status(200).json({ result: value, msg: 'done', status: 200 })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

router.get('/home/banners', async (req, res) => {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://unstop.com/api/public/get-banners/homepage')
    await page.waitForSelector('pre')
    let element = await page.$('pre')
    let value = await page.evaluate(el => el.textContent, element)
    await browser.close()
    if (value)
      return res.status(200).json({ result: value, msg: 'done', status: 200 })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

router.get('/home/posts', async (req, res) => {
  const params = req.query
  try {
    const browser = await puppeteer.launch({
      args: ['--disable-web-security', '--disable-features=IsolateOrigins']
    })
    const page = await browser.newPage()

    await page.evaluate(params => {
      var url = 'https://medium.com/_/graphql'
      var xhr = new XMLHttpRequest()
      xhr.open('POST', url)

      xhr.setRequestHeader('Accept', 'application/json')
      xhr.setRequestHeader('Content-Type', 'application/json')

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          document.body.appendChild(document.createElement('pre'))
          document.getElementsByTagName('pre')[0].innerText = xhr.responseText
        }
      }

      var data = [
        {
          operationName: 'TopicFeedQuery',
          variables: {
            tagSlug: 'technology',
            mode: 'HOT',
            paging: {
              to: '0',
              limit: params.per_page
            }
          },
          query:
            'query TopicFeedQuery($paging: PagingOptions, $tagSlug: String, $mode: TagFeedMode) {\n  tagFeed(paging: $paging, tagSlug: $tagSlug, mode: $mode) {\n    items {\n      ... on TagFeedItem {\n        feedId\n        reason\n        moduleSourceEncoding\n        postProviderExplanation {\n          reason\n          topic {\n            name\n            __typename\n          }\n          __typename\n        }\n        post {\n          ...PostPreview_post\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    pagingInfo {\n      next {\n        limit\n        to\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment PostPreview_post on Post {\n  id\n  creator {\n    ...PostPreview_user\n    __typename\n    id\n  }\n  collection {\n    ...CardByline_collection\n    __typename\n    id\n  }\n  ...InteractivePostBody_postPreview\n  firstPublishedAt\n  isLocked\n  isSeries\n  isShortform\n  latestPublishedAt\n  inResponseToCatalogResult {\n    __typename\n  }\n  previewImage {\n    id\n    focusPercentX\n    focusPercentY\n    __typename\n  }\n  readingTime\n  sequence {\n    slug\n    __typename\n  }\n  title\n  uniqueSlug\n  visibility\n  ...CardByline_post\n  ...PostFooterActionsBar_post\n  ...InResponseToEntityPreview_post\n  ...PostScrollTracker_post\n  ...ReadMore_post\n  ...HighDensityPreview_post\n  __typename\n}\n\nfragment PostPreview_user on User {\n  __typename\n  name\n  username\n  ...CardByline_user\n  id\n}\n\nfragment CardByline_user on User {\n  __typename\n  id\n  name\n  username\n  mediumMemberAt\n  socialStats {\n    followerCount\n    __typename\n  }\n  ...userUrl_user\n  ...UserMentionTooltip_user\n}\n\nfragment userUrl_user on User {\n  __typename\n  id\n  customDomainState {\n    live {\n      domain\n      __typename\n    }\n    __typename\n  }\n  hasSubdomain\n  username\n}\n\nfragment UserMentionTooltip_user on User {\n  id\n  name\n  username\n  bio\n  imageId\n  mediumMemberAt\n  ...UserAvatar_user\n  ...UserFollowButton_user\n  __typename\n}\n\nfragment UserAvatar_user on User {\n  __typename\n  id\n  imageId\n  mediumMemberAt\n  name\n  username\n  ...userUrl_user\n}\n\nfragment UserFollowButton_user on User {\n  ...UserFollowButtonSignedIn_user\n  ...UserFollowButtonSignedOut_user\n  __typename\n  id\n}\n\nfragment UserFollowButtonSignedIn_user on User {\n  id\n  name\n  __typename\n}\n\nfragment UserFollowButtonSignedOut_user on User {\n  id\n  ...SusiClickable_user\n  __typename\n}\n\nfragment SusiClickable_user on User {\n  ...SusiContainer_user\n  __typename\n  id\n}\n\nfragment SusiContainer_user on User {\n  ...SignInOptions_user\n  ...SignUpOptions_user\n  __typename\n  id\n}\n\nfragment SignInOptions_user on User {\n  id\n  name\n  __typename\n}\n\nfragment SignUpOptions_user on User {\n  id\n  name\n  __typename\n}\n\nfragment CardByline_collection on Collection {\n  __typename\n  id\n  name\n  ...collectionUrl_collection\n}\n\nfragment collectionUrl_collection on Collection {\n  id\n  domain\n  slug\n  __typename\n}\n\nfragment InteractivePostBody_postPreview on Post {\n  extendedPreviewContent(\n    truncationConfig: {previewParagraphsWordCountThreshold: 400, minimumWordLengthForTruncation: 150, truncateAtEndOfSentence: true, showFullImageCaptions: true, shortformPreviewParagraphsWordCountThreshold: 30, shortformMinimumWordLengthForTruncation: 30}\n  ) {\n    bodyModel {\n      ...PostBody_bodyModel\n      __typename\n    }\n    isFullContent\n    __typename\n  }\n  __typename\n  id\n}\n\nfragment PostBody_bodyModel on RichText {\n  sections {\n    name\n    startIndex\n    textLayout\n    imageLayout\n    backgroundImage {\n      id\n      originalHeight\n      originalWidth\n      __typename\n    }\n    videoLayout\n    backgroundVideo {\n      videoId\n      originalHeight\n      originalWidth\n      previewImageId\n      __typename\n    }\n    __typename\n  }\n  paragraphs {\n    id\n    ...PostBodySection_paragraph\n    __typename\n  }\n  ...normalizedBodyModel_richText\n  __typename\n}\n\nfragment PostBodySection_paragraph on Paragraph {\n  name\n  ...PostBodyParagraph_paragraph\n  __typename\n  id\n}\n\nfragment PostBodyParagraph_paragraph on Paragraph {\n  name\n  type\n  ...ImageParagraph_paragraph\n  ...TextParagraph_paragraph\n  ...IframeParagraph_paragraph\n  ...MixtapeParagraph_paragraph\n  ...CodeBlockParagraph_paragraph\n  __typename\n  id\n}\n\nfragment ImageParagraph_paragraph on Paragraph {\n  href\n  layout\n  metadata {\n    id\n    originalHeight\n    originalWidth\n    focusPercentX\n    focusPercentY\n    alt\n    __typename\n  }\n  ...Markups_paragraph\n  ...ParagraphRefsMapContext_paragraph\n  ...PostAnnotationsMarker_paragraph\n  __typename\n  id\n}\n\nfragment Markups_paragraph on Paragraph {\n  name\n  text\n  hasDropCap\n  dropCapImage {\n    ...MarkupNode_data_dropCapImage\n    __typename\n    id\n  }\n  markups {\n    type\n    start\n    end\n    href\n    anchorType\n    userId\n    linkMetadata {\n      httpStatus\n      __typename\n    }\n    __typename\n  }\n  __typename\n  id\n}\n\nfragment MarkupNode_data_dropCapImage on ImageMetadata {\n  ...DropCap_image\n  __typename\n  id\n}\n\nfragment DropCap_image on ImageMetadata {\n  id\n  originalHeight\n  originalWidth\n  __typename\n}\n\nfragment ParagraphRefsMapContext_paragraph on Paragraph {\n  id\n  name\n  text\n  __typename\n}\n\nfragment PostAnnotationsMarker_paragraph on Paragraph {\n  ...PostViewNoteCard_paragraph\n  __typename\n  id\n}\n\nfragment PostViewNoteCard_paragraph on Paragraph {\n  name\n  __typename\n  id\n}\n\nfragment TextParagraph_paragraph on Paragraph {\n  type\n  hasDropCap\n  codeBlockMetadata {\n    mode\n    lang\n    __typename\n  }\n  ...Markups_paragraph\n  ...ParagraphRefsMapContext_paragraph\n  __typename\n  id\n}\n\nfragment IframeParagraph_paragraph on Paragraph {\n  iframe {\n    mediaResource {\n      id\n      iframeSrc\n      iframeHeight\n      iframeWidth\n      title\n      __typename\n    }\n    __typename\n  }\n  layout\n  ...getEmbedlyCardUrlParams_paragraph\n  ...Markups_paragraph\n  __typename\n  id\n}\n\nfragment getEmbedlyCardUrlParams_paragraph on Paragraph {\n  type\n  iframe {\n    mediaResource {\n      iframeSrc\n      __typename\n    }\n    __typename\n  }\n  __typename\n  id\n}\n\nfragment MixtapeParagraph_paragraph on Paragraph {\n  type\n  mixtapeMetadata {\n    href\n    mediaResource {\n      mediumCatalog {\n        id\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  ...GenericMixtapeParagraph_paragraph\n  __typename\n  id\n}\n\nfragment GenericMixtapeParagraph_paragraph on Paragraph {\n  text\n  mixtapeMetadata {\n    href\n    thumbnailImageId\n    __typename\n  }\n  markups {\n    start\n    end\n    type\n    href\n    __typename\n  }\n  __typename\n  id\n}\n\nfragment CodeBlockParagraph_paragraph on Paragraph {\n  codeBlockMetadata {\n    lang\n    mode\n    __typename\n  }\n  __typename\n  id\n}\n\nfragment normalizedBodyModel_richText on RichText {\n  paragraphs {\n    markups {\n      type\n      __typename\n    }\n    codeBlockMetadata {\n      lang\n      mode\n      __typename\n    }\n    ...getParagraphHighlights_paragraph\n    ...getParagraphPrivateNotes_paragraph\n    __typename\n  }\n  sections {\n    startIndex\n    ...getSectionEndIndex_section\n    __typename\n  }\n  ...getParagraphStyles_richText\n  ...getParagraphSpaces_richText\n  __typename\n}\n\nfragment getParagraphHighlights_paragraph on Paragraph {\n  name\n  __typename\n  id\n}\n\nfragment getParagraphPrivateNotes_paragraph on Paragraph {\n  name\n  __typename\n  id\n}\n\nfragment getSectionEndIndex_section on Section {\n  startIndex\n  __typename\n}\n\nfragment getParagraphStyles_richText on RichText {\n  paragraphs {\n    text\n    type\n    __typename\n  }\n  sections {\n    ...getSectionEndIndex_section\n    __typename\n  }\n  __typename\n}\n\nfragment getParagraphSpaces_richText on RichText {\n  paragraphs {\n    layout\n    metadata {\n      originalHeight\n      originalWidth\n      id\n      __typename\n    }\n    type\n    ...paragraphExtendsImageGrid_paragraph\n    __typename\n  }\n  ...getSeriesParagraphTopSpacings_richText\n  ...getPostParagraphTopSpacings_richText\n  __typename\n}\n\nfragment paragraphExtendsImageGrid_paragraph on Paragraph {\n  layout\n  type\n  __typename\n  id\n}\n\nfragment getSeriesParagraphTopSpacings_richText on RichText {\n  paragraphs {\n    id\n    __typename\n  }\n  sections {\n    startIndex\n    __typename\n  }\n  __typename\n}\n\nfragment getPostParagraphTopSpacings_richText on RichText {\n  paragraphs {\n    layout\n    text\n    codeBlockMetadata {\n      lang\n      mode\n      __typename\n    }\n    __typename\n  }\n  sections {\n    startIndex\n    __typename\n  }\n  __typename\n}\n\nfragment CardByline_post on Post {\n  ...DraftStatus_post\n  ...Star_post\n  ...shouldShowPublishedInStatus_post\n  __typename\n  id\n}\n\nfragment DraftStatus_post on Post {\n  id\n  pendingCollection {\n    id\n    creator {\n      id\n      __typename\n    }\n    ...BoldCollectionName_collection\n    __typename\n  }\n  statusForCollection\n  creator {\n    id\n    __typename\n  }\n  isPublished\n  __typename\n}\n\nfragment BoldCollectionName_collection on Collection {\n  id\n  name\n  __typename\n}\n\nfragment Star_post on Post {\n  id\n  creator {\n    id\n    __typename\n  }\n  __typename\n}\n\nfragment shouldShowPublishedInStatus_post on Post {\n  statusForCollection\n  isPublished\n  __typename\n  id\n}\n\nfragment PostFooterActionsBar_post on Post {\n  id\n  visibility\n  isPublished\n  allowResponses\n  postResponses {\n    count\n    __typename\n  }\n  isLimitedState\n  creator {\n    id\n    __typename\n  }\n  collection {\n    id\n    __typename\n  }\n  ...BookmarkButton_post\n  ...MultiVote_post\n  ...SharePostButtons_post\n  ...PostFooterSocialPopover_post\n  ...OverflowMenuButtonWithNegativeSignal_post\n  __typename\n}\n\nfragment BookmarkButton_post on Post {\n  visibility\n  ...SusiClickable_post\n  ...AddToCatalogBookmarkButton_post\n  __typename\n  id\n}\n\nfragment SusiClickable_post on Post {\n  id\n  mediumUrl\n  ...SusiContainer_post\n  __typename\n}\n\nfragment SusiContainer_post on Post {\n  id\n  __typename\n}\n\nfragment AddToCatalogBookmarkButton_post on Post {\n  ...AddToCatalogBase_post\n  __typename\n  id\n}\n\nfragment AddToCatalogBase_post on Post {\n  id\n  __typename\n}\n\nfragment MultiVote_post on Post {\n  id\n  creator {\n    id\n    ...SusiClickable_user\n    __typename\n  }\n  isPublished\n  ...SusiClickable_post\n  collection {\n    id\n    slug\n    __typename\n  }\n  isLimitedState\n  ...MultiVoteCount_post\n  __typename\n}\n\nfragment MultiVoteCount_post on Post {\n  id\n  ...PostVotersNetwork_post\n  __typename\n}\n\nfragment PostVotersNetwork_post on Post {\n  id\n  voterCount\n  recommenders {\n    name\n    __typename\n  }\n  __typename\n}\n\nfragment SharePostButtons_post on Post {\n  id\n  isLimitedState\n  visibility\n  mediumUrl\n  ...SharePostButton_post\n  ...usePostUrl_post\n  __typename\n}\n\nfragment SharePostButton_post on Post {\n  id\n  __typename\n}\n\nfragment usePostUrl_post on Post {\n  id\n  creator {\n    ...userUrl_user\n    __typename\n    id\n  }\n  collection {\n    id\n    domain\n    slug\n    __typename\n  }\n  isSeries\n  mediumUrl\n  sequence {\n    slug\n    __typename\n  }\n  uniqueSlug\n  __typename\n}\n\nfragment PostFooterSocialPopover_post on Post {\n  id\n  mediumUrl\n  title\n  ...SharePostButton_post\n  ...usePostUrl_post\n  __typename\n}\n\nfragment OverflowMenuButtonWithNegativeSignal_post on Post {\n  id\n  ...OverflowMenuWithNegativeSignal_post\n  ...CreatorActionOverflowPopover_post\n  __typename\n}\n\nfragment OverflowMenuWithNegativeSignal_post on Post {\n  id\n  creator {\n    id\n    __typename\n  }\n  collection {\n    id\n    __typename\n  }\n  ...OverflowMenuItemUndoClaps_post\n  __typename\n}\n\nfragment OverflowMenuItemUndoClaps_post on Post {\n  id\n  clapCount\n  ...ClapMutation_post\n  __typename\n}\n\nfragment ClapMutation_post on Post {\n  __typename\n  id\n  clapCount\n  ...MultiVoteCount_post\n}\n\nfragment CreatorActionOverflowPopover_post on Post {\n  allowResponses\n  id\n  statusForCollection\n  isLocked\n  isPublished\n  clapCount\n  mediumUrl\n  pinnedAt\n  pinnedByCreatorAt\n  curationEligibleAt\n  mediumUrl\n  responseDistribution\n  visibility\n  inResponseToPostResult {\n    __typename\n  }\n  inResponseToCatalogResult {\n    __typename\n  }\n  pendingCollection {\n    id\n    name\n    creator {\n      id\n      __typename\n    }\n    avatar {\n      id\n      __typename\n    }\n    domain\n    slug\n    __typename\n  }\n  creator {\n    id\n    ...MutePopoverOptions_creator\n    ...auroraHooks_publisher\n    __typename\n  }\n  collection {\n    id\n    name\n    creator {\n      id\n      __typename\n    }\n    avatar {\n      id\n      __typename\n    }\n    domain\n    slug\n    ...MutePopoverOptions_collection\n    ...auroraHooks_publisher\n    __typename\n  }\n  ...useIsPinnedInContext_post\n  ...NewsletterV3EmailToSubscribersMenuItem_post\n  ...OverflowMenuItemUndoClaps_post\n  __typename\n}\n\nfragment MutePopoverOptions_creator on User {\n  id\n  __typename\n}\n\nfragment auroraHooks_publisher on Publisher {\n  __typename\n  ... on Collection {\n    isAuroraEligible\n    isAuroraVisible\n    viewerEdge {\n      id\n      isEditor\n      __typename\n    }\n    __typename\n    id\n  }\n  ... on User {\n    isAuroraVisible\n    __typename\n    id\n  }\n}\n\nfragment MutePopoverOptions_collection on Collection {\n  id\n  __typename\n}\n\nfragment useIsPinnedInContext_post on Post {\n  id\n  collection {\n    id\n    __typename\n  }\n  pendingCollection {\n    id\n    __typename\n  }\n  pinnedAt\n  pinnedByCreatorAt\n  __typename\n}\n\nfragment NewsletterV3EmailToSubscribersMenuItem_post on Post {\n  id\n  creator {\n    id\n    newsletterV3 {\n      id\n      subscribersCount\n      __typename\n    }\n    __typename\n  }\n  isNewsletter\n  isAuthorNewsletter\n  __typename\n}\n\nfragment InResponseToEntityPreview_post on Post {\n  id\n  inResponseToEntityType\n  __typename\n}\n\nfragment PostScrollTracker_post on Post {\n  id\n  collection {\n    id\n    __typename\n  }\n  sequence {\n    sequenceId\n    __typename\n  }\n  __typename\n}\n\nfragment ReadMore_post on Post {\n  mediumUrl\n  readingTime\n  ...usePostUrl_post\n  __typename\n  id\n}\n\nfragment HighDensityPreview_post on Post {\n  id\n  title\n  previewImage {\n    id\n    focusPercentX\n    focusPercentY\n    __typename\n  }\n  extendedPreviewContent(\n    truncationConfig: {previewParagraphsWordCountThreshold: 400, minimumWordLengthForTruncation: 150, truncateAtEndOfSentence: true, showFullImageCaptions: true, shortformPreviewParagraphsWordCountThreshold: 30, shortformMinimumWordLengthForTruncation: 30}\n  ) {\n    subtitle\n    __typename\n  }\n  ...HighDensityFooter_post\n  __typename\n}\n\nfragment HighDensityFooter_post on Post {\n  id\n  readingTime\n  tags {\n    ...TopicPill_tag\n    __typename\n  }\n  ...BookmarkButton_post\n  ...ExpandablePostCardOverflowButton_post\n  ...OverflowMenuButtonWithNegativeSignal_post\n  __typename\n}\n\nfragment TopicPill_tag on Tag {\n  __typename\n  id\n  displayTitle\n  normalizedTagSlug\n}\n\nfragment ExpandablePostCardOverflowButton_post on Post {\n  creator {\n    id\n    __typename\n  }\n  ...ExpandablePostCardEditorWriterButton_post\n  ...ExpandablePostCardReaderButton_post\n  __typename\n  id\n}\n\nfragment ExpandablePostCardEditorWriterButton_post on Post {\n  id\n  collection {\n    id\n    name\n    slug\n    __typename\n  }\n  allowResponses\n  clapCount\n  visibility\n  mediumUrl\n  responseDistribution\n  ...useIsPinnedInContext_post\n  ...CopyFriendLinkMenuItem_post\n  ...NewsletterV3EmailToSubscribersMenuItem_post\n  ...OverflowMenuItemUndoClaps_post\n  __typename\n}\n\nfragment CopyFriendLinkMenuItem_post on Post {\n  id\n  __typename\n}\n\nfragment ExpandablePostCardReaderButton_post on Post {\n  id\n  collection {\n    id\n    __typename\n  }\n  creator {\n    id\n    __typename\n  }\n  clapCount\n  ...ClapMutation_post\n  __typename\n}\n'
        }
      ]

      xhr.send(JSON.stringify(data))
    }, params)

    await page.waitForSelector('pre')
    let element = await page.$('pre')
    let value = await page.evaluate(el => el.textContent, element)
    await browser.close()
    if (value)
      return res.status(200).json({ result: value, msg: 'done', status: 200 })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

router.get('/home/posts/topWriters', async (req, res) => {
  console.log('called')
  try {
    const browser = await puppeteer.launch({
      args: ['--disable-web-security', '--disable-features=IsolateOrigins']
    })
    const page = await browser.newPage()

    await page.evaluate(() => {
      var url = 'https://medium.com/_/graphql'
      var xhr = new XMLHttpRequest()
      xhr.open('POST', url)

      xhr.setRequestHeader('Accept', 'application/json')
      xhr.setRequestHeader('Content-Type', 'application/json')

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          document.body.appendChild(document.createElement('pre'))
          document.getElementsByTagName('pre')[0].innerText = xhr.responseText
        }
      }

      var data = [
        {
          operationName: 'TagTopWritersQuery',
          variables: {
            tagSlug: 'programming',
            limit: 25
          },
          query:
            'query TagTopWritersQuery($tagSlug: String!, $limit: Int) {\n  tagTopWriters(tagSlug: $tagSlug, limit: $limit) {\n    ...EntityFollowList_user\n    __typename\n  }\n}\n\nfragment EntityFollowList_user on User {\n  __typename\n  id\n  algoliaObjectId\n  name\n  bio\n  ...UserAvatar_user\n  ...userUrl_user\n  ...EntityPresentationRankedModulePublishingTracker_entity\n}\n\nfragment UserAvatar_user on User {\n  __typename\n  id\n  imageId\n  mediumMemberAt\n  name\n  username\n  ...userUrl_user\n}\n\nfragment userUrl_user on User {\n  __typename\n  id\n  customDomainState {\n    live {\n      domain\n      __typename\n    }\n    __typename\n  }\n  hasSubdomain\n  username\n}\n\nfragment EntityPresentationRankedModulePublishingTracker_entity on RankedModulePublishingEntity {\n  __typename\n  ... on Collection {\n    id\n    __typename\n  }\n  ... on User {\n    id\n    __typename\n  }\n}\n'
        }
      ]

      xhr.send(JSON.stringify(data))
    })

    await page.waitForSelector('pre')
    let element = await page.$('pre')
    let value = await page.evaluate(el => el.textContent, element)
    await browser.close()
    if (value)
      return res.status(200).json({ result: value, msg: 'done', status: 200 })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

router.get('/hackerearth/challenges', async (req, res) => {
  try {
    // console.log('called')
    // const browser = await puppeteer.launch({ headless: true })
    // const page = await browser.newPage()
    // await page.goto('https://www.hackerearth.com/challenges/')
    // await page.waitForSelector('#challenge-container')
    // const scrapedData = await page.evaluate(() =>
    //   Array.from(document.getElementsByClassName('challenge-card-modern'))
    //     .map(card => ({
    //       imageUrl:
    //         card.getElementsByClassName('event-image')[0] &&
    //         card.getElementsByClassName('event-image')[0]?.style
    //           ? card.getElementsByClassName('event-image')[0]?.style
    //               ?.backgroundImage
    //           : card.getElementsByClassName('company-logo')[0]?.src,
    //       title: card.getElementsByClassName('challenge-list-title')[0]
    //         ?.innerText,
    //       type: card.getElementsByClassName('challenge-type')[0]?.innerText,
    //       status:
    //         card.getElementsByClassName('challenge-button')[0]?.innerText ===
    //         'START NOW'
    //           ? 'On-going'
    //           : 'upcoming',
    //       date: card.getElementsByClassName('countdown')[0]
    //         ? card.getElementsByClassName('countdown')[0]?.children[1]
    //             ?.innerText
    //         : card.getElementsByClassName('date')[0]?.innerText,
    //       url: card.children[0]?.href
    //     }))
    //     .filter(card => card.title)
    // )
    // if (scrapedData)
    //   res.json({
    //     result: scrapedData.map(sd => {
    //       return {
    //         ...sd,
    //         date: sd.date.includes(':\nDAYS')
    //           ? parseInt(sd.date.replaceAll(':\nDAYS').replaceAll(' ', ''))
    //           : sd.date,
    //         imageUrl: sd.imageUrl.replace('url(', '').replace(')', '')
    //       }
    //     }),
    //     msg: 'done',
    //     status: 200
    //   })
    const result = await MeiliSearchClient.index('hackerearth').getDocuments()
    if (result) return res.json({ result, msg: 'done', status: 200 })
    res.json({ result: null, msg: 'done', status: 200 })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

router.get('/mlh/challenges', async (req, res) => {
  try {
    // const currentYear = new Date().getFullYear()
    // console.log(currentYear + 1)
    // const browser = await puppeteer.launch({ headless: true })
    // const page = await browser.newPage()
    // await page.goto(`https://mlh.io/seasons/${currentYear + 1}/events`)
    // await page.waitForSelector('.feature')
    // const scrapedData = await page.evaluate(() =>
    //   Array.from(
    //     document
    //       .getElementsByClassName('feature')[2]
    //       .children[0].getElementsByClassName('event')
    //   ).map(card => ({
    //     imageUrl: card.getElementsByTagName('img')[0].src,
    //     title: card.getElementsByClassName('event-name')[0]?.innerText,
    //     url: card.getElementsByTagName('a')[0].href,
    //     logoUrl: card.getElementsByTagName('img')[1].src,
    //     date: card.getElementsByClassName('event-date')[0]?.innerText,
    //     location: {
    //       city: card.getElementsByClassName('event-location')[0].children[0]
    //         ?.innerText,
    //       state:
    //         card.getElementsByClassName('event-location')[0].children[1]
    //           ?.innerText
    //     },
    //     type: card.getElementsByClassName('event-hybrid-notes')[0]?.innerText
    //   }))
    // )
    // console.log(JSON.stringify(scrapedData))
    res.json({
      result: await MeiliSearchClient.index('mlh').getDocuments(),
      msg: 'done',
      status: 200
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

router.get('/explore/unstop', async (req, res) => {
  try {
    const data = []
    const types = [
      'jobs',
      'internships',
      'competitions',
      'quizzes',
      'cultural',
      'workshops'
    ]

    for (let i = 0; i < types.length; i++) {
      const type = types[i]
      const result = await MeiliSearchClient.index('unstop').search('', {
        filter: `end_date_filter > ${Date.now()} AND type = ${type}`,
        limit: 6
      })
      data.push({ type, result })
    }

    res.status(200).json({
      result: data,
      msg: 'done',
      status: 200
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

router.get('/openseasme', async (req, res) => {
  try {
    const s = {
      id: 'id',
      title: 'title',
      description: 'description',
      duration: 'durationMinutes',
      rating_count: 'ratingCount',
      rating_average: 'ratingAverage',
      price: 'price',
      published_by: {
        user_id: 'publishedByUser.id',
        display_name: 'publishedByUser.displayName'
      },
      languages: 'languages',
      language_codes: 'languageCodes',
      language_group_course_details: [
        {
          language_codes: 'languageCodes',
          node_id: 'nodeId',
          course_guid: 'courseGuid'
        }
      ],
      image_path: 'imagePath',
      date_created: 'dateCreated',
      date_changed: 'dateChanged',
      has_demo: 'hasDemo',
      audio_languages: 'audioLanguages',
      includes_language_switcher: 'includesLanguageSwitcher',
      course_style: 'courseStyle'
    }

    const filterObject = [
      {
        filterKey: 'featuresFacet',
        selectedIds: ['12']
      },
      {
        filterKey: 'priceRanges',
        selectedIds: ['under $20', '$20 - $40']
      },
      {
        filterKey: 'accreditationFacet',
        selectedIds: ['1444', '1833', '2178', '1479']
      },
      {
        filterKey: 'languages',
        selectedIds: ['fr', 'ar', 'pt', 'de']
      },
      {
        filterKey: 'durationRanges',
        selectedIds: ['1 - 10 minutes', '11 - 30 minutes']
      },
      {
        filterKey: 'ratingsRanges',
        selectedIds: ['All courses', '1 star & up']
      },
      {
        filterKey: 'publishersFacet',
        selectedIds: [
          '742',
          '909837',
          '5663',
          '10370',
          '4927',
          '11689',
          '66573'
        ]
      }
    ]

    // console.log(filterObject.map(f => f.filterKey))
    // console.log(
    //   await MeiliSearchClient.index('openseasme').updateFilterableAttributes([
    //     'featuresFacet',
    //     'priceRanges',
    //     'accreditationFacet',
    //     'languages',
    //     'durationRanges',
    //     'ratingsRanges',
    //     'publishersFacet'
    //   ])
    // )

    // const filters = filterObject.reduce((acc, filter) => {
    //   const { filterKey, selectedIds } = filter
    //   acc.push(...selectedIds.map(id => `${filterKey} = "${id}"`))
    //   return acc
    // }, [])

    // const groupedFilters = []
    // const stringFilters = filters.filter(filter => typeof filter === 'string')

    // if (stringFilters.length) {
    //   groupedFilters.push(stringFilters)
    // }

    const result = await MeiliSearchClient.index('opensesame').getDocuments({
      limit: 100
    })

    res.status(200).json({
      result,
      status: 200
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ result: null, msg: 'error', status: 500 })
  }
})

export default router
