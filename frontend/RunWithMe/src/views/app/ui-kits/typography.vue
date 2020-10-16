<template>
    <div class="main-content">
        <breadcumb :page="'Typography'" :folder="'UI Kits'" />
        
        <b-row>
            <b-col md="12">
                <b-row>
                    <!-- left-content -->
                    <b-col md="6">

                        <!-- headings -->
                         <b-card
                            title="Headings"
                            class="mb-30"
                        >
                            <span class="section-info">
                                All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.
                            </span>
                            <b-row class=" mb-30">
                                <b-col md="6">
                                    <h1 class="heading">h1. Heading 1</h1>
                                    <div class="br"></div>
                                    <h2 class="heading">h2. Heading 2</h2>
                                    <div class="br"></div>
                                    <h3 class="heading">h3. Heading 3</h3>
                                    <div class="br"></div>
                                    <h3 class="heading">h3. Heading 3</h3>
                                    <div class="br"></div>
                                    <h4 class="heading">h4. Heading 4</h4>
                                    <div class="br"></div>
                                    <h5 class="heading">h5. Heading 5</h5>
                                    <div class="br"></div>
                                    <h6 class="heading">h6. Heading 6</h6>
                                                    
                                </b-col>
                                <b-col md="6">
                                    <h1 class="heading text-primary">h1. Heading 1</h1>
                                    <div class="card-title"></div>
                                    <h2 class="heading text-secondary">h2. Heading 2</h2>
                                    <div class="br"></div>
                                    <h3 class="heading text-success">h3. Heading 3</h3>
                                    <div class="br"></div>
                                    <h3 class="heading text-danger">h3. Heading 3</h3>
                                    <div class="br"></div>
                                    <h4 class="heading text-warning">h4. Heading 4</h4>
                                    <div class="br"></div>
                                    <h5 class="heading text-info">h5. Heading 5</h5>
                                    <div class="br"></div>
                                    <h6 class="heading text-info">h6. Heading 6</h6>
                                                
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col md="12">
                                    <span class="section-info">
                                        Use the included utility classes to recreate the small secondary heading text.
                                    </span>
                                    <div class="br"></div>
                                    <h3 class="heading">Fancy display heading
                                        <small class="text-mute">With faded secondary text</small>
                                    </h3>
                                    <span class="section-info">
                                        Larger, slightly more opinionated heading styles.
                                    </span>
                                    <div class="display-content">
                                        <h3 class="heading display-1">Display 1</h3>
                                        <h3 class="heading display-2">Display 2</h3>
                                        <h3 class="heading display-3">Display 3</h3>
                                    </div>
                                    <div class="br"></div>
                                    <span class="section-info">
                                         Make a paragraph stand out by adding <code>.lead</code>
                                    </span>
                                    <div class="content-section">
                                        <p class="lead text-mute">
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                                        </p>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card>


                        <!-- general -->
                        <b-card 
                            title="General"
                            class="mb-30">


                            <span class="section-info">
                                Styling for common inline HTML5 elements:
                            </span>
                            <b-row class=" mb-30">
                                <b-col md="12">
                                    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                                    <div class="br"></div>
                                    <p><del>This line of text is meant to be treated as deleted text.</del></p>
                                    <div class="br"></div>
                                    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                                    <div class="br"></div>
                                    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                                    <div class="br"></div>
                                    <p><u>This line of text will render as underlined</u></p>
                                    <div class="br"></div>
                                    <p><small>This line of text is meant to be treated as fine print.</small></p>
                                    <div class="br"></div>
                                    <p><strong>This line rendered as bold text.</strong></p>
                                    <div class="br"></div>
                                    <p><em>This line rendered as italicized text.</em></p>
                                </b-col>
                            </b-row>
                            <span class="section-info">
                                Stylized abbreviations implementation of HTML’s <code>&lt;abbr&gt;</code> element:
                            </span>
                            <div class="section-content">
                                <p><abbr title="attribute">attr</abbr></p>
                                <p><abbr title="HyperText Markup Language">HTML</abbr></p>
                            </div>
                            <div class="br"></div>
                            <span class="section-info mb-30">
                                Quoting blocks of content:
                            </span>
                            <div class="br"></div>
                            <blockquote class="blockquote">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                            <blockquote class="blockquote">
                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </b-card>
                    </b-col>

                    <!-- right-content -->
                    <b-col md="6">

                        <!-- text -->
                        <b-card 
                            title="Text"
                            class=" mb-30">
                            <span class="section-info">
                                Basic Text Examples:
                            </span>
                           <b-row class=" mb-30">
                               <b-col md="12">
                                    <p><span>Example Text</span></p>
                                    <div class="br"></div>
                                    <p><span class="t-font-bold">Example Bold Text</span></p>
                                    <div class="br"></div>
                                    <p><span class="t-font-bolder">Example Bolder Text</span></p>
                                    <div class="br"></div>
                                    <p><span class="t-font-boldest">Example Boldest Text</span></p>
                                    <div class="br"></div>
                                    <p><span class="t-font-u">Example Uppercase Text</span></p>
                                </b-col>
                            </b-row>
                            <span class="section-info">
                                State colors:
                            </span>

                            <b-row class=" mb-30">
                                <b-col md="12">
                                    <p><span class="text-success">Success state text</span></p>
                                    <div class="br"></div>
                                    <p><span class="text-warning">Warning state text</span></p>
                                    <div class="br"></div>
                                    <p><span class="text-info">Info state text</span></p>
                                    <div class="br"></div>
                                    <p><span class="text-danger">Danger state text</span></p>
                                    <div class="br"></div>
                                    <p><span class="text-primary">Primary state text</span></p>
                                </b-col>
                            </b-row>
                        </b-card>

                        <!-- link -->
                        <b-card 
                            title="Link"
                            class="mb-30">

                            <span class="section-info">
                                Basic link Examples:
                            </span>

                            <b-row class=" mb-30">
                                <b-col md="12">
                                    
                                    <p><a href="" class="typo_link text-primary">Example Text</a></p>
                                    <div class="br"></div>
                                    <p><a href="" class="typo_link text-primary t-font-bold">Example Bold Text</a></p>
                                    <div class="br"></div>
                                    <p><a href="" class="typo_link text-primary t-font-bolder">Example Bolder Text</a></p>
                                    <div class="br"></div>
                                    <p><a href="" class="typo_link text-primary t-font-boldest">Example Boldest Text</a></p>
                                    <div class="br"></div>
                                    <p><a href="" class="typo_link text-primary t-font-u">Example Uppercase Text</a></p>
                                                   
                                </b-col>   
                            </b-row>
                             <span class="section-info">
                                State colors:
                             </span>
                             <b-row class=" mb-30">
                                 <b-col md="12">
                                    <p><a href="" class="typo_link text-success">Success state text</a></p>
                                    <div class="br"></div>
                                    <p><a href="" class="typo_link text-warning">Warning state text</a></p>
                                    <div class="br"></div>
                                    <p><a href="" class="typo_link text-info">Info state text</a></p>
                                    <div class="br"></div>
                                    <p><a href="" class="typo_link text-danger">Danger state text</a></p>
                                    <div class="br"></div>
                                    <p><a href="" class="typo_link text-primary">Primary state text</a></p>
                                                    
                                 </b-col>
                             </b-row>

                        </b-card>
                        

                        <!-- start::divider -->
                        <b-card 
                            title="Divider"
                            class="mb-30">
                            <div class="divider">
                                <span></span>
                                <span>or</span>
                                <span></span>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
     metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Typography"
  },
}
</script>

