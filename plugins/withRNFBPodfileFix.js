const { withPodfile } = require("@expo/config-plugins");

const withRNFBPodfileFix = (config) => {
  return withPodfile(config, (config) => {
    const podfile = config.modResults;

    if (
      !podfile.contents.includes(
        "CLANG_ALLOW_NON_MODULAR_INCLUDES_IN_FRAMEWORK_MODULES",
      )
    ) {
      podfile.contents = podfile.contents.replace(
        /post_install do \|installer\|/,
        `post_install do |installer|
    installer.pods_project.targets.each do |target|
      target.build_configurations.each do |bc|
        bc.build_settings['CLANG_ALLOW_NON_MODULAR_INCLUDES_IN_FRAMEWORK_MODULES'] = 'YES'
      end
    end
`,
      );
    }

    return config;
  });
};

module.exports = withRNFBPodfileFix;
